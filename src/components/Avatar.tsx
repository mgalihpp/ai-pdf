"use client"

import Image from "next/image";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Icons } from "./Icons";

const UserAvatar = ({ imageUrl, name }: { imageUrl: string; name: string }) => {
  return (
    <Avatar className="relative w-8 h-8">
      {imageUrl ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill={true}
            sizes="50vw"
            loading="lazy"
            src={imageUrl}
            alt="profile picture"
            style={{ objectFit: "contain" }}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{name}</span>
          <Icons.user className="h-4 w-4 text-zinc-900" />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
