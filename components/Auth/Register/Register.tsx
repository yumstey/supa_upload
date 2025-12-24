"use client";

import { JSX, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Stack,
  Center,
  Anchor,
  Notification,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { supabase } from "@/lib/supabase/client";
import { IconAt, IconX, IconCheck } from "@tabler/icons-react";
import Image from "next/image";

export const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Notification state
  const [notification, setNotification] = useState<{
    title: string;
    message: string;
    color: "red" | "green";
    icon: JSX.Element;
    visible: boolean;
  }>({ title: "", message: "", color: "red", icon: <IconX />, visible: false });

  // Form handling
  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validate: {
      fullName: (value) =>
        value.trim().length < 3 ? "Имя должно быть не менее 3 символов" : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Неверный формат email",
      password: (value) =>
        value.length < 8 ? "Пароль должен быть не менее 8 символов" : null,
    },
  });

  // Register handler
  const handleRegister = async (values: typeof form.values) => {
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          full_name: values.fullName,
        },
      },
    });

    if (error) {
      setNotification({
        title: "Ошибка",
        message: error.message.includes("already registered")
          ? "Этот email уже зарегистрирован"
          : error.message,
        color: "red",
        icon: <IconX size={16} />,
        visible: true,
      });
    } else {
      setNotification({
        title: "Успех",
        message: "Вы успешно зарегистрированы",
        color: "green",
        icon: <IconCheck size={16} />,
        visible: true,
      });

      setTimeout(() => {
        router.push("/auth/login");
      }, 1000);
    }

    setLoading(false);
  };

   const signInWithOAuth = async (provider: "google" | "facebook" | "apple") => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${location.origin}/auth/callback` },
    });

    if (error) {
      setNotification({
        title: "Ошибка",
        message: error.message,
        color: "red",
        icon: <IconX size={16} />,
        visible: true,
      });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className=" absolute  w-full top-8 flex items-center justify-end">
        {notification.visible && (
          <Notification
            color={notification.color}
            icon={notification.icon}
            onClose={() =>
              setNotification((prev) => ({ ...prev, visible: false }))
            }
            title={notification.title}
            maw={350}
            mr={40}
          >
            {notification.message}
          </Notification>
        )}
      </div>

      <Center style={{ minHeight: "100vh" }}>
        <Box
          style={{
            width: 400,
            padding: 30,
            borderRadius: 10,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            backgroundColor: "white",
          }}
        >
          <Stack>
            <Title order={2}>Регистрация</Title>
            <Text color="dimmed" size="sm">
               Создайте ваш аккаунт в  SupaUpload
            </Text>

            <form onSubmit={form.onSubmit(handleRegister)}>
              <Stack>
                <TextInput
                  label="Полное имя"
                  placeholder="Иван Иванов"
                  {...form.getInputProps("fullName")}
                />
                <TextInput
                  label="Email"
                  placeholder="ivan.ivanov@gmail.com"
                  {...form.getInputProps("email")}
                  leftSection={<IconAt size={16} />}
                />
                <PasswordInput
                  label="Пароль"
                  placeholder="Введите пароль"
                  {...form.getInputProps("password")}
                />

                <Button type="submit" fullWidth loading={loading}>
                  зарегистрировать 
                </Button>
              </Stack>
            </form>

            <Text
              size="sm"
              className="flex flex-row items-center justify-between"
            >
               Уже есть аккаунт?{" "}{" "}
              <Anchor href="/auth/login" size="sm">
               Войти
              </Anchor>
            </Text>

            <Text size="sm" color="dimmed" className="text-center my-2">
             Быстрый вход с помощью
            </Text>

            <div className="grid grid-cols-3 gap-5">
              {" "}
              <button
                onClick={() => signInWithOAuth("facebook")}
                className="hover:bg-black/5 flex flex-row items-center justify-center py-2 rounded-md border border-[#1877F2]"
              >
                {" "}
                <div className="size-6">
                  {" "}
                  <Image
                    src={
                      "https://ucarecdn.com/58461293-53e3-4a58-a553-a0635e115446/-/preview/38x38/"
                    }
                    alt="facebook icon"
                    width={38}
                    height={38}
                    quality={100}
                  />{" "}
                </div>{" "}
              </button>{" "}
              <button
                onClick={() => signInWithOAuth("google")}
                className="hover:bg-black/5 flex flex-row items-center justify-center py-2 rounded-md border border-[#1877F2]"
              >
                {" "}
                <div className="size-6">
                  {" "}
                  <Image
                    src={
                      "https://ucarecdn.com/2fd4838a-f007-49e0-b875-cdd4806dddf2/-/preview/38x38/"
                    }
                    alt="google icon"
                    width={38}
                    height={38}
                    quality={100}
                  />{" "}
                </div>{" "}
              </button>{" "}
              <button
                onClick={() => signInWithOAuth("apple")}
                className="hover:bg-black/5 flex flex-row items-center justify-center py-2 rounded-md border border-[#1877F2]"
              >
                {" "}
                <div className="size-6">
                  {" "}
                  <Image
                    src={
                      "https://ucarecdn.com/2cc82413-bbbb-4d87-a19f-76e2c458e651/-/preview/38x38/"
                    }
                    alt="apple icon"
                    width={38}
                    height={38}
                    quality={100}
                  />{" "}
                </div>{" "}
              </button>{" "}
            </div>
          </Stack>
        </Box>
      </Center>
    </div>
  );
};
