import { Button } from '@nextui-org/button';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from '@nextui-org/link'
import { Input } from '@nextui-org/input';
// import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-row">
      <Input type="email" label="Email" placeholder="Enter your email" />
      <Button>Submit</Button>
    </section>
  )
}
