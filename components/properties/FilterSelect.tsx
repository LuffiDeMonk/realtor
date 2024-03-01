'use client'
import React from 'react'
import { Control, FieldValue, FieldValues } from 'react-hook-form'
import { FormControl, FormField, FormItem } from '../ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { cn } from '@/lib/utils'

type Props = {
    name: string,
    selectValues: {
        id: string,
        name: string,
        value: string | number
    }[],
    control: Control<FieldValues> | undefined,
    className?: string,
    title: string
}

export default function FilterSelect({ control, name, selectValues, className, title }: Props) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn(className)}>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={title} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {
                                selectValues.map(item => (
                                    <React.Fragment key={item.id}>
                                        <SelectItem value={item.value.toString()}>{item.name}</SelectItem>
                                    </React.Fragment>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </FormItem>
            )}
        />
    )
}

