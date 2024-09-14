
import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Toggle } from "@/components/ui/toggle"
import { ImInfo } from "react-icons/im";

const ShadcnShowcase = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">RebelCN</h1>
      <h2 className="text-2xl font-semibold mb-12">Inspired by @cactusui</h2>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="light">Light</Button>

        </div>
        <div className="flex flex-wrap gap-4 mt-3.5">
          <Button>Default</Button>
          <Button type="plain">Plain</Button>
          <Button type="chill" >Chill</Button>

        </div>
        <div className="flex flex-wrap gap-4 mt-3.5">
          <Button>Default</Button>
          <Button className="!rounded-xl">Rounded LG</Button>
          <Button className="!rounded-full" >Rounded Full</Button>

        </div>
      </section>

      <section className="mb-12">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <h2 className="text-2xl font-semibold mb-4">Input</h2>
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" placeholder="Your Email" />
          <Button className=" mt-1.5" >Create Account</Button>

        </div>
      </section>

      <section className="mb-12 hidden">
        <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Account tab content</TabsContent>
          <TabsContent value="password">Password tab content</TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Card</h2>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-[350px] mt-4 flex h-10 rounded-lg   items-center justify-center">
          <p className='flex items-center'> <ImInfo className='inline-block mr-2 opacity-50' />This is a smaller card</p>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Select</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Switch</h2>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Badge</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="light">Light</Badge>
        </div>
  
      </section>


      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Slider</h2>
        <Slider defaultValue={[33]} max={100} step={1} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Toggle</h2>
        <Toggle aria-label="Toggle italic">
          <i className="italic">I</i>
        </Toggle>
      </section>
    </div>
  );
};

export default ShadcnShowcase;