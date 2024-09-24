import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome fellow student!
        </h1>
        <p className="leading-normal text-muted-foreground">
          You are now able to chat with Evolvelix himself. He knows everything about all our courses. 
          In this space you can freely ask anything. Wether you want more explanation or to dive deeper about specific information. 
        </p>
        <p className="leading-normal text-muted-foreground">
          Ask your Questions now!
        </p>
      </div>
    </div>
  )
}
