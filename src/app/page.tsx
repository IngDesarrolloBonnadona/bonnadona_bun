"use client";
import React from "react";
import Image from "next/image";
import ButtonAuth from "@/components/auth/ButtonAuth";
import { ImagesLinksApp } from "../../public/images_apps/imagesLinksApp";
import '../app/global.css'

const HomePage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0 50px",
        // backgroundImage: "url('/background/back-nunny.jpg')",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      {/* Lado Izquierdo: Contenido Principal */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        {/* Logo Bonnadona */}
        <Image
          src={"/logos/LOGO-BONNADONA-2.png"}
          alt="Logo de Bonnadona"
          width={300}
          height={150}
          style={{ marginBottom: "20px" }}
        />

        <h1 style={{ fontSize: "2em", margin: "0" }}>Bonnadona HUB</h1>
        <p style={{ marginBottom: "40px", color: "#8c8c8c" }}>Aplicaciones</p>

        <ButtonAuth />
      </div>

      {/* Lado Derecho: Imágenes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          // justifyContent: "center",
          // alignItems: "center",
          animation: "slideIn 1s ease-in-out",
        }}
      >
        {ImagesLinksApp.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index}`}
            width={90}
            height={90}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
