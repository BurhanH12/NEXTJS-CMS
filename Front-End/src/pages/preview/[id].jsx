
import dynamic from "next/dynamic";
import React, { Component, useEffect, useState } from 'react';
const Preview = dynamic(() => import("../../../Preview/Index"), {
  ssr: true,
});

export default function page() {
  return (
    <>
      <Preview />
    </>
  );
}
