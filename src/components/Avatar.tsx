import { ImgHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  isBorder?: true
}

export function Avatar({isBorder, ...props}: AvatarProps){
  return (
    <img 
      className={twMerge(
        "w-14 h-14 object-cover border-4 rounded-md border-gray-800",
        isBorder ? "ring-2 ring-green-300" : ""
      )}
      {...props}
    />
  )
}