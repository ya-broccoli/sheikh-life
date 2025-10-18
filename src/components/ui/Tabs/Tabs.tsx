import clsx from 'clsx'
import styles from './Tabs.module.css'
import * as Tabs from '@radix-ui/react-tabs'
import React from 'react'

type Tab = {
  value: string
  label: string
  content: React.ReactNode
}

type RadixTabsProps = {
  tabs?: Tab[]
  defaultValue?: string
  className?: string
  listClassName?: string
  children?: React.ReactNode
  onValueChange?: (tab: string) => void
}

export const RadixTabs: React.FC<RadixTabsProps> = ({
  tabs,
  defaultValue,
  className,
  listClassName,
  children,
  onValueChange,
}) => {
  const hasTabsArray = tabs && tabs.length > 0
  const defaultTab = defaultValue || (hasTabsArray ? tabs[0].value : undefined)

  return (
    <Tabs.Root
      className={clsx(styles.Root, className)}
      defaultValue={defaultTab}
      onValueChange={onValueChange}>
      <Tabs.List className={clsx(styles.List, listClassName)} aria-label="Tabs">
        {hasTabsArray
          ? tabs.map((tab) => (
              <Tabs.Trigger
                tabIndex={0}
                key={tab.value}
                className={styles.Trigger}
                value={tab.value}>
                {tab.label}
              </Tabs.Trigger>
            ))
          : children}
      </Tabs.List>
      {hasTabsArray
        ? tabs.map((tab) => (
            <Tabs.Content key={tab.value} className={styles.Content} value={tab.value}>
              {tab.content}
            </Tabs.Content>
          ))
        : null}
    </Tabs.Root>
  )
}
