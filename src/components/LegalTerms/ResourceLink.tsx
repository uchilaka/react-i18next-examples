import React from 'react'

export interface IResourceLink {
  url: string;
  label: string;
  target?: '_blank' | '_self';
}

interface ResourceLinkProps {
  link: IResourceLink
}

export default function ResourceLink({ link }: ResourceLinkProps) {
  return (
    <a href={link.url} target={link.target}>
      {link.label}
    </a>
  )
}
