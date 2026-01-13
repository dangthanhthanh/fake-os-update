"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OS_CONFIG, OS_LIST } from "@/lib/os-data";
import type { OperatingSystem, SimulationConfig } from "@/types/os-simulator";
import { Rocket } from "lucide-react";

interface ConfigurationFormProps {
  onStart: (config: SimulationConfig) => void;
}

const formSchema = z.object({
  os: z.enum(OS_LIST, { required_error: "Please select an operating system." }),
  version: z.string().min(1, "Please select a version."),
  duration: z.coerce.number().min(5, "Duration must be at least 5 seconds."),
  customMessage: z.string().optional(),
  showPercentage: z.boolean(),
});

export function ConfigurationForm({ onStart }: ConfigurationFormProps) {
  const [selectedOs, setSelectedOs] = useState<OperatingSystem | undefined>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      duration: 60,
      customMessage: "",
      showPercentage: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const config: SimulationConfig = {
      ...values,
      version: values.version as SimulationConfig['version'],
      customMessage: values.customMessage || OS_CONFIG[values.os].defaultMessage,
    };
    onStart(config);
  }

  const handleOsChange = (osValue: string) => {
    const os = osValue as OperatingSystem;
    setSelectedOs(os);
    form.setValue("os", os);
    form.resetField("version");
  };

  return (
    <Card className="w-full max-w-md shadow-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <Rocket className="text-accent" />
          OS Update Simulator
        </CardTitle>
        <CardDescription>Configure and launch a fake OS update screen.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="os"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Operating System</FormLabel>
                    <Select onValueChange={handleOsChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an OS" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {OS_LIST.map((os) => (
                          <SelectItem key={os} value={os}>
                            {os}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="version"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Version</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!selectedOs}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a version" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {selectedOs &&
                          OS_CONFIG[selectedOs].versions.map((version) => (
                            <SelectItem key={version} value={version}>
                              {version}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Update Duration (seconds)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 60" {...field} />
                  </FormControl>
                  <FormDescription>How long the simulation will last.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customMessage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Custom Message (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Leave blank for default" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="showPercentage"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Show Percentage</FormLabel>
                    <FormDescription>Display the progress percentage on screen.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" size="lg">
              Start Simulation
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
