"use client";

import {
  AppShell,
  Burger,
  Button,
  Divider,
  Group,
  NavLink,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import {
  IconBolt,
  IconBrandPnpm,
  IconCreditCard,
  IconSettings,
} from "@tabler/icons-react";

export default function WorkSpaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();

  const LINKS = [
    {
      label: "Рабочее пространство",
      href: "/workSpace",
      icon: <IconBrandPnpm size={18} />,
    },
    {
      label: "Биллинг",
      href: "/workSpace/billing",
      icon: <IconCreditCard size={18} />,
    },
    {
      label: "Настройки",
      href: "/workSpace/settings",
      icon: <IconSettings size={18} />,
    },
  ];

  return (
    <>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        ></link>
      </header>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 260,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        {/* NAVBAR */}
        <AppShell.Navbar p="md">
          <Button fw={500} mb="md" color="violet" leftSection={<IconBolt />}>
            Обновить тариф
          </Button>

          <Divider mb="md" />

          {LINKS.map((link) => {
            const active = pathname === link.href;

            return (
              <NavLink
                key={link.href}
                label={link.label}
                leftSection={link.icon}
                active={active}
                py={6}
                onClick={() => router.push(link.href)}
                styles={{
                  root: {
                    borderRadius: 6,
                    marginBottom: 4,

                    ...(active && {
                      backgroundColor: "#5462B3",
                      color: "white",
                    }),
                  },
                }}
              />
            );
          })}
        </AppShell.Navbar>

        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
            <Text fw={600}>SupaUpload</Text>
          </Group>
        </AppShell.Header>

        <AppShell.Main className="bg-[#FAFAFC]">{children}</AppShell.Main>
      </AppShell>
    </>
  );
}
