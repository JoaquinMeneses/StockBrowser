import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 p-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Stock Browser
      </Typography>
      <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
        <li>
          <Typography color="blue-gray" className="font-normal">
            Desarrollado por{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/joaquin-meneses-0113ba1b7/"
              className="hover:text-terciary font-bold"
            >
              Joaquin Meneses
            </a>
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
