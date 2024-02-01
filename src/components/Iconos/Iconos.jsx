import PropTypes from "prop-types";

export const Iconos = ({ tipo }) => {
  // Lógica para determinar qué ícono renderizar según el tipo
  switch (tipo) {
    case "Calendario":
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
        </>
      );
    case "Reloj":
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </>
      );
    case "Capacidad":
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </>
      );

    case "Doctor":
      return (
        <svg
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 25.1333C28.9725 25.1333 33 21.076 33 16.0667C33 11.0573 28.9725 7 24 7C19.0275 7 15 11.0573 15 16.0667C15 21.076 19.0275 25.1333 24 25.1333Z"
            fill="#333333"
          />
          <mask
            id="mask0"
            maskUnits="userSpaceOnUse"
            x="6"
            y="28"
            width="36"
            height="13"
          >
            <path
              d="M16.8786 28.3569C17.3814 28.2333 17.8971 28.4861 18.1254 28.9539L22.1893 28.9542C24 28.9538 24 28.9543 25.8105 28.9539L29.8746 28.9539C30.1029 28.4861 30.6186 28.2333 31.1214 28.3569C36.5255 29.6849 42 32.3928 42 36.4664V40.9997H6V36.4664C6 32.3928 11.4745 29.6849 16.8786 28.3569Z"
              fill="#333333"
            />
          </mask>
          <g mask="url(#mask0)"></g>
          <path
            d="M15.6354 29.9375C15.4505 30.5613 15.4381 31.3074 15.7149 32.1985C15.8088 32.1896 15.9039 32.1851 16 32.1851C17.6569 32.1851 19 33.5382 19 35.2073C19 36.8764 17.6569 38.2295 16 38.2295C14.3431 38.2295 13 36.8764 13 35.2073C13 34.3657 13.3415 33.6044 13.8925 33.0564C13.4321 31.7408 13.3829 30.4996 13.7178 29.3692C13.7252 29.3442 13.7328 29.3193 13.7406 29.2945C9.54212 30.7966 6 33.1897 6 36.4664V42.9997H42V36.4664C42 33.2191 38.5212 30.8396 34.3723 29.3352C34.5763 29.9155 34.6923 30.5333 34.7142 31.1851H34.9412C35.1715 31.1851 35.3947 31.2645 35.5732 31.4101L37.632 33.0891C37.8649 33.279 38 33.5636 38 33.8641V38.2295C38 38.7818 37.5523 39.2295 37 39.2295H34.9412V37.2295H36V34.3389L34.5851 33.1851H34.5045C34.4953 33.2244 34.4858 33.2639 34.476 33.3035L33.9986 33.1851H32.4149L31 34.3389V37.2295H32.0588V39.2295H30C29.4477 39.2295 29 38.7818 29 38.2295V33.8641C29 33.5636 29.1351 33.279 29.368 33.0891L31.4268 31.4101C31.6053 31.2645 31.8285 31.1851 32.0588 31.1851H32.7126C32.6878 30.6727 32.5803 30.2144 32.4114 29.8041C32.2091 29.3129 31.9073 28.8627 31.5142 28.4558C31.3833 28.422 31.2523 28.389 31.1214 28.3569C30.6186 28.2333 30.1029 28.4861 29.8746 28.9539L25.8105 28.9539C24.9218 28.9541 24.4694 28.9541 24.0249 28.954H24.0248H24.0248C23.5637 28.954 23.1112 28.954 22.1893 28.9542L18.1254 28.9539C17.8971 28.4861 17.3814 28.2333 16.8786 28.3569C16.7666 28.3844 16.6544 28.4125 16.5424 28.4413C16.0993 28.8976 15.7951 29.3987 15.6354 29.9375ZM17 35.2073C17 35.7858 16.5384 36.2295 16 36.2295C15.4616 36.2295 15 35.7858 15 35.2073C15 34.6288 15.4616 34.1851 16 34.1851C16.5384 34.1851 17 34.6288 17 35.2073Z"
            fill="#333333"
          />
        </svg>
      );

    case "Revisión":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
          />
        </svg>
      );

    case "Comentario":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      );

    case "Borrar":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      );

    case "Cancelar":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      );

    case "Aceptar":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      );

    default:
      return null;
  }
};

Iconos.propTypes = {
  tipo: PropTypes.oneOf(["Doctor", "Calendario", "Reloj", "Capacidad", "Aceptar", "Cancelar", "Borrar", "Comentario", "Revisión"])
    .isRequired,
};
