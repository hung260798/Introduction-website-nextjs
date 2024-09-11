"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const { handleSubmit, register } = useForm();
  const onsubmit = (data) => console.log(data);
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <input type="text" {...register("name")} />
        <input type="text" {...register("email")} />
        <input type="text" {...register("message")} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
