import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "糖加盐",
  titleTemplate: false,
  description: "糖加盐的个人主页",
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,

    socialLinks: [
      {
        icon: {
          svg: `<svg t="1696152796609" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4307" width="200" height="200">
          <path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="4308"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="4309"></path>
          </svg>`,
        },
        link: "mailto:tangjiayan2019@gmail.com",
        ariaLabel: "Email",
      },

      {
        icon: {
          svg: `<svg t="1696150606660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4469" width="200" height="200">
            <path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z" fill="#444444" p-id="4470"></path>
            </svg>`,
        },
        link: "https://github.com/tangjan",
        ariaLabel: "GitHub",
      },

      {
        icon: {
          svg: `<svg t="1696148746931" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4710" width="200" height="200">
          <path d="M510.872 0.00004A511.738935 511.738935 0 0 0 0.578065 470.68598l274.473965 113.377986a144.332982 144.332982 0 0 1 89.621989-24.903997L486.810003 382.552991v-2.615999a193.084975 193.084975 0 1 1 193.049976 193.095975h-4.48L501.388001 697.214951c0 2.275 0.193 4.549999 0.193 6.823a144.799982 144.799982 0 0 1-286.766963 28.543996L18.227063 651.159957A511.965935 511.965935 0 1 0 510.792 0.00004h0.069zM321.404024 776.591941L258.540032 750.549945a108.772986 108.772986 0 1 0 59.599993-148.745981l64.967991 26.837996a80.09299 80.09299 0 1 1-61.646992 147.835981v0.114z m487.139938-396.767949A128.661984 128.661984 0 1 0 679.882979 508.439975a128.843984 128.843984 0 0 0 128.662983-128.616983z m-225.061971-0.228a96.661988 96.661988 0 1 1 96.661988 96.661988 96.433988 96.433988 0 0 1-96.661988-96.661988z" fill="#004986" p-id="4711"></path>
          </svg>`,
        },
        link: "https://steamcommunity.com/id/tangjan/",
        ariaLabel: "Steam",
      },

      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470">
          <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>`,
        },
        link: `https://twitter.com/tangjiayan`,
        ariaLabel: `X`,
      },

      {
        icon: {
          svg: `<svg t="1696152502305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2541" width="200" height="200">
          <path d="M679.424 746.862l84.005-395.996c7.424-34.852-12.581-48.567-35.438-40.009L234.277 501.138c-33.72 13.13-33.134 32-5.706 40.558l126.282 39.424 293.156-184.576c13.714-9.143 26.295-3.986 16.018 5.157L426.898 615.973l-9.143 130.304c13.13 0 18.871-5.706 25.71-12.581l61.696-59.429 128 94.282c23.442 13.129 40.01 6.29 46.3-21.724zM1024 512c0 282.843-229.157 512-512 512S0 794.843 0 512 229.157 0 512 0s512 229.157 512 512z" fill="#1296DB" p-id="2542"></path>
          </svg>`,
        },
        link: `https://t.me/jan_tang`,
        ariaLabel: `Telegram`,
      },

      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 417 512.238">
          <path fill="#43E660" fill-rule="nonzero" d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"/></svg>`,
        },
        link: `https://linktr.ee/tangjiayan`,
        ariaLabel: "Linktree",
      },
    ],

    // footer: {
    //   copyright: "Copyright © 2024 糖加盐",
    // },
  },
});
