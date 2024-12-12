
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="h-screen w-full grid md:grid-cols-[300px_1fr]">
      <div className="border-r bg-gray-100/40 hidden md:block dark:bg-gray-800/40">
        <div className="flex h-full flex-col">
          <header className="flex h-16 items-center px-4 border-b">
            <MapPinIcon className="h-6 w-6 mr-2" />
            <h1 className="font-semibold text-lg">Profiles</h1>
          </header>
          <div className="flex-1 overflow-auto p-2">
            <ul className="grid gap-2">
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span className="truncate">Alice Smith</span>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span className="truncate">Bob Johnson</span>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span className="truncate">Eve Williams</span>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span className="truncate">Charlie Brown</span>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span className="truncate">Grace Lee</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-16 items-center gap-4 border-b px-4 md:gap-8">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <MapPinIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <h1 className="font-semibold text-lg">Alice Smith</h1>
          <Button size="icon" variant="ghost" className="ml-auto">
            <SearchIcon className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              >
                <img
                  src="/placeholder.svg"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                  style={{ aspectRatio: "32/32", objectFit: "cover" }}
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-sm">Name</CardTitle>
                  <CardDescription>Alice Smith</CardDescription>
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-sm">Email</CardTitle>
                  <CardDescription>alice@example.com</CardDescription>
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-sm">Phone</CardTitle>
                  <CardDescription>(123) 456-7890</CardDescription>
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-sm">Address</CardTitle>
                  <CardDescription>1234 Elm St, Pleasantville, NV</CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>Map view of the contact&apos;s address</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[1/1] rounded-md overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="400"
                    alt="Map"
                    className="aspect-[1/1] object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}