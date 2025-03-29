
"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useDispatch } from "react-redux"
import { getfiltercatagoryvalue } from "@/lib/store/features/slice"

const frameworks = [
  { value: "all category", label: "All Category" },
  { value: "headphone", label: "Headphone" },
  { value: "wirelessheadphone", label: "Wireless Headphone" },
  { value: "speaker", label: "Speaker" },
]

export default function FilterCategory() {  // ✅ Renamed to PascalCase
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  
  const dispatch = useDispatch() 

  const handleSelect = (selectedValue: string) => {
    console.log(selectedValue, "selectedValue")
    setValue(selectedValue)
    dispatch(getfiltercatagoryvalue(selectedValue)) 
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-[200px]"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select price range..."}
          <ChevronsUpDown className="h-4 w-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[200px]">
        <Command>
          <CommandInput placeholder="Search price range..." />
          <CommandList>
            <CommandEmpty>No price range found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={() => handleSelect(framework.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
