"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AboutStudent() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">About Student Luan</CardTitle>
        <CardDescription>
          Xin chào tôi là học sinh Luan, tôi đến từ Hà Nội, Việt Nam.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          {/* <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div> */}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Jessia Rose" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="fatherName">Father Name</Label>
          <Input id="fatherName" type="text" placeholder="Fahim Rahman" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="motherName">Mother Name</Label>
          <Input id="motherName" type="text" placeholder="Jannatul Kazi" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dateOfBirth">Date Of Birth</Label>
          <Input id="dateOfBirth" type="text" placeholder="07.08.2006" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="religion">Religion</Label>
          <Input id="religion" type="text" placeholder="Islam" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="fatherOccupation">Father Occupation</Label>
          <Input
            id="fatherOccupation"
            type="text"
            placeholder="Graphic Designer"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">E-Mail</Label>
          <Input id="email" type="email" placeholder="jessiarose@gmail.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="admissionDate">Admission Date</Label>
          <Input id="admissionDate" type="text" placeholder="05.01.2019" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            type="text"
            placeholder="House #10, Road #6, Australia"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="text" placeholder="+88 9856418" />
        </div>
      </CardContent>
    </Card>
  );
}
