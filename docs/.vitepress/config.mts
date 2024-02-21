import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '糖加盐',
  titleTemplate: false,
  // base: '/www/',
  description: "Jan Tang",
  head: [['link', { rel: 'icon', href: 'https://cdn.tangjiayan.com/windmill-com.png' }]],
  lang: 'zh-CN',
  themeConfig: {
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],


    socialLinks: [
      { icon: {
          svg: `<svg t="1696152796609" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4307" width="200" height="200"><title>Email: tangjiayan2019@gmail.com</title>
          <path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" p-id="4308"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" p-id="4309"></path></svg>`
        },
        link: 'mailto:tangjiayan2019@gmail.com',
        ariaLabel: 'Email', 
      },
      {
        icon: {
          svg: `<svg t="1702564591679" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4426" width="200" height="200"><title>FaceBook: Jan Tang</title><path d="M919.307378 0 104.692622 0C46.925334 0 0 46.812397 0 104.692622L0 919.307378c0 57.880225 46.925334 104.692622 104.692622 104.692622L919.307378 1024c57.880225 0 104.805559-46.755928 104.805559-104.692622L1024.112937 104.692622C1024.112937 46.812397 977.187603 0 919.307378 0zM901.463329 225.478769c0 0-151.617955-55.339142-151.617955 57.259071l0 85.041579 147.891033 0-13.100695 140.493658-134.790339 0 0 478.796515-181.150987 0L568.694386 508.273078 479.925885 508.273078 479.925885 367.77942l88.768501 0L568.694386 282.737841 568.694386 220.001323c0 0-1.863461-114.122863 146.987537-146.987537 104.466748-23.15209 206.053601 10.220801 206.053601 10.220801L901.463329 225.478769z" p-id="4427" fill="#0866FF"></path></svg>`
        },
        link: 'https://www.facebook.com/tangjiayan',
        ariaLabel: 'FaceBook', 
        
      },
      { icon: {
            svg: `<svg t="1696150606660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4469" width="200" height="200"><title>GitHub: tangjan</title><path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z" fill="#444444" p-id="4470"></path></svg>`
          },
          link: 'https://github.com/tangjan',
          ariaLabel: 'GitHub', 
      },
      { 
        icon: {
          svg: `<svg t="1696148746931" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4710" width="200" height="200"><title>Steam: Jan</title><path d="M510.872 0.00004A511.738935 511.738935 0 0 0 0.578065 470.68598l274.473965 113.377986a144.332982 144.332982 0 0 1 89.621989-24.903997L486.810003 382.552991v-2.615999a193.084975 193.084975 0 1 1 193.049976 193.095975h-4.48L501.388001 697.214951c0 2.275 0.193 4.549999 0.193 6.823a144.799982 144.799982 0 0 1-286.766963 28.543996L18.227063 651.159957A511.965935 511.965935 0 1 0 510.792 0.00004h0.069zM321.404024 776.591941L258.540032 750.549945a108.772986 108.772986 0 1 0 59.599993-148.745981l64.967991 26.837996a80.09299 80.09299 0 1 1-61.646992 147.835981v0.114z m487.139938-396.767949A128.661984 128.661984 0 1 0 679.882979 508.439975a128.843984 128.843984 0 0 0 128.662983-128.616983z m-225.061971-0.228a96.661988 96.661988 0 1 1 96.661988 96.661988 96.433988 96.433988 0 0 1-96.661988-96.661988z" fill="#004986" p-id="4711"></path></svg>`
        },
        link: 'https://steamcommunity.com/id/tangjan/',
        ariaLabel: 'Steam'
      },
      {
        icon: {
          svg: `<svg width="200" height="200" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg"><title>X: Jan</title>
          <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="black"/>
          </svg>`
        },
        link: `https://twitter.com/tangjiayan`,
        ariaLabel: `X`
      },
      {
        icon: {
          svg: `<svg t="1708477422220" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5264" width="200" height="200"><title>Threads: Tang Jan</title>
          <path d="M435.84 589.056c0-26.24 12.608-67.968 110.528-67.968 30.016 0 48.512 2.176 73.344 7.744-7.936 102.784-58.24 116.352-107.136 116.352-26.752 0-76.8-13.952-76.8-56.128z" fill="#000000" p-id="5265"></path><path d="M165.76 1024h692.48A165.76 165.76 0 0 0 1024 858.24V165.76A165.76 165.76 0 0 0 858.24 0H165.76A165.76 165.76 0 0 0 0 165.76v692.48A165.76 165.76 0 0 0 165.76 1024zM375.424 378.24c36.288-51.84 84.16-72.064 150.4-72.064 46.72 0 86.464 15.744 114.88 45.504 28.352 29.824 44.544 72.448 48.256 126.912 15.68 6.592 30.208 14.336 43.392 23.232 53.248 35.776 82.56 89.28 82.56 150.592 0 130.368-106.88 243.584-300.288 243.584-166.08 0-338.624-96.64-338.624-384.256C176 225.664 343.104 128 514.112 128c78.976 0 264.256 11.648 333.888 241.728l-65.28 16.896c-53.888-163.84-166.848-189.952-270.336-189.952-171.2 0-267.968 104.192-267.968 325.952 0 198.848 108.16 304.448 270.208 304.448 133.312 0 232.704-69.248 232.704-170.688 0-69.056-57.984-102.08-60.992-102.08-11.328 59.2-41.664 158.848-174.912 158.848-77.632 0-144.64-53.632-144.64-123.904 0-100.352 95.232-136.704 170.432-136.704 28.16 0 62.08 1.92 79.808 5.504 0-30.592-25.856-82.944-91.264-82.944-58.304 0-74.24 18.432-92.8 39.936l-1.536 1.728c-12.928-8.64-56-38.464-56-38.464z" fill="#000000" p-id="5266"></path></svg>`
        },
        link: `https://www.threads.net/@tangjiayan2020`,
        ariaLabel: `Threads`
      },
      {
        icon: {
          svg: `<svg t="1696221019662" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7205" width="200" height="200">
          <title>Switch: SW-0839-0102-7515</title>
          <path d="M604.842667 1024h156.757333c144.042667 0 262.4-118.357333 262.4-262.4V262.4C1024 118.4 905.642667 0 761.6 0H601.6c-3.157333 0-6.4 3.157333-6.4 6.4v1011.2c-0.042667 3.242667 3.2 6.4 9.642667 6.4z m195.157333-563.157333c57.642667 0 102.357333 48 102.357333 102.314666 0 57.685333-48 102.4-102.357333 102.4-57.6 0-102.4-44.757333-102.4-102.4-3.2-57.557333 44.8-102.314667 102.4-102.314666zM486.4 0H262.4C118.4 0 0 118.4 0 262.4v499.2C0 905.642667 118.4 1024 262.4 1024h224c3.157333 0 6.4-3.157333 6.4-6.357333V6.4c0.042667-3.242667-3.2-6.4-6.4-6.4zM412.842667 940.842667H262.4a178.944 178.944 0 0 1-179.242667-179.242667V262.4A178.944 178.944 0 0 1 262.4 83.157333H409.6l3.242667 857.685334zM160 307.157333c0 54.4 41.6 96 96 96s96-41.6 96-96c0-54.314667-41.6-96-96-96s-96 41.685333-96 96z" fill="" p-id="7206"></path></svg>`
        },
        link: `https://cdn.tangjiayan.com/switch-account.jpg`,
        ariaLabel: 'Switch'
      },
      { icon: {
          svg: `<svg t="1696223148272" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8389" width="200" height="200"><title>微信: tangjiayan_2013</title>
          <path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z" fill="#28C445" p-id="8390"></path><path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z" fill="#28C445" p-id="8391"></path></svg>`
        },
        link: 'https://cdn.tangjiayan.com/wechat-qrcode.png',
        ariaLabel: '微信', 
      },
      {
        icon: {
          svg: `<svg t="1696152502305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2541" width="200" height="200"><title>Telegram: Jan</title>
          <path d="M679.424 746.862l84.005-395.996c7.424-34.852-12.581-48.567-35.438-40.009L234.277 501.138c-33.72 13.13-33.134 32-5.706 40.558l126.282 39.424 293.156-184.576c13.714-9.143 26.295-3.986 16.018 5.157L426.898 615.973l-9.143 130.304c13.13 0 18.871-5.706 25.71-12.581l61.696-59.429 128 94.282c23.442 13.129 40.01 6.29 46.3-21.724zM1024 512c0 282.843-229.157 512-512 512S0 794.843 0 512 229.157 0 512 0s512 229.157 512 512z" fill="#1296DB" p-id="2542"></path></svg>`
        },
        link: `https://t.me/jan_tang`,
        ariaLabel: `Telegram`
      },
      {
        icon: {
          svg: `<svg t="1696148870764" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4028" width="200" height="200"><title>BiliBili: b盐</title><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="4029"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="4030"></path></svg>`
        },
        link: `https://space.bilibili.com/7571715`,
        ariaLabel: 'BiliBili'
      },
      {
        icon: {
          svg: `<svg t="1696148637638" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3696" width="200" height="200"><title>网易云音乐: blink盐</title><path d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z" fill="#EA3E3C" p-id="3697"></path><path d="M527.616 849.43872a373.6064 373.6064 0 0 1-162.54976-39.00416c-112.36352-55.16288-180.00896-176.29184-172.55424-308.67456 7.41376-130.34496 85.10464-237.4656 202.752-279.552a35.85024 35.85024 0 0 1 24.15616 67.51232c-107.66336 38.49216-150.81472 136.86784-155.29984 216.13568-5.86752 103.51616 46.08 197.79584 132.34176 240.13824 124.69248 60.30336 216.91392 22.35392 260.82304-5.64224 59.8016-38.16448 97.86368-100.01408 96.95232-157.55264-1.024-63.72352-24.064-120.99584-63.27296-157.14304a145.408 145.408 0 0 0-65.5872-35.28704q2.82624 9.76896 5.64224 19.32288c13.38368 45.63968 24.94464 85.05344 25.6 114.40128a134.26688 134.26688 0 0 1-37.69344 97.76128 139.1104 139.1104 0 0 1-100.6592 40.45824 140.10368 140.10368 0 0 1-100.47488-42.24 169.12384 169.12384 0 0 1-46.2848-122.76736c1.19808-85.12512 80.11776-153.28256 162.816-175.104a324.80256 324.80256 0 0 1-6.71744-67.05152 92.0576 92.0576 0 0 1 69.18144-91.81184c46.21312-12.53376 104.448 5.19168 124.66176 37.888a35.84 35.84 0 0 1-11.70432 49.31584 35.84 35.84 0 0 1-49.26464-11.65312 62.34112 62.34112 0 0 0-48.45568-5.21216c-4.32128 1.71008-12.35968 4.90496-12.76928 23.10144a270.87872 270.87872 0 0 0 6.73792 58.51136 217.4976 217.4976 0 0 1 133.56032 57.6512c53.57568 49.38752 85.0432 125.46048 86.35392 208.71168 1.29024 81.85856-49.7664 167.86432-130.048 219.136a310.14912 310.14912 0 0 1-168.2432 48.65024z m23.6544-457.55392c-56.77056 15.6672-107.4688 63.03744-108.07296 106.42432a98.304 98.304 0 0 0 25.6512 71.43424 68.0448 68.0448 0 0 0 49.36704 20.87936 67.24608 67.24608 0 0 0 49.44896-18.944 63.19104 63.19104 0 0 0 17.23392-46.08c-0.4096-19.79392-11.7248-58.368-22.67136-95.6928-3.61472-12.42112-7.35232-25.14944-10.9568-38.02112z" fill="#FFFFFF" p-id="3698"></path></svg>`
        },
        link: `https://music.163.com/#/user/home?id=124652290`,
        ariaLabel: '网易云音乐'
      },
      {
        icon: {
          svg: `<svg t="1696149473071" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5501" width="200" height="200"><title>豆瓣: 琰什</title><path d="M88 72.9h848v95.5H88z" fill="#58CB6A" p-id="5502"></path><path d="M88 72.9h848v95.5H88zM862.3 641.5V268H161.7v373.5h700.6zM263.4 363.4h498.4v182.5H263.4V363.4z" fill="#58CB6A" p-id="5503"></path><path d="M862.3 641.5V268H161.7v373.5h700.6zM263.4 363.4h498.4v182.5H263.4V363.4zM710.8 856.7c30.5-46.7 59.3-100.8 85.9-162.2l-102-37.2c-26.5 72.8-57.4 139.4-92.5 199.4H424.9c-29.4-77.8-62.6-144.3-99.8-199.4l-93.8 37.2c38.6 58 69.9 111.9 93.8 162.2H64v94.5h896v-94.5H710.8z" fill="#58CB6A" p-id="5504"></path><path d="M710.8 856.7c30.5-46.7 59.3-100.8 85.9-162.2l-102-37.2c-26.5 72.8-57.4 139.4-92.5 199.4H424.9c-29.4-77.8-62.6-144.3-99.8-199.4l-93.8 37.2c38.6 58 69.9 111.9 93.8 162.2H64v94.5h896v-94.5H710.8z" fill="#58CB6A" p-id="5505"></path></svg>`
          
        },
        link: `https://www.douban.com/people/tangjan`,
        ariaLabel: '豆瓣'
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><title>MyAnimeList: saaalt</title><path fill="currentColor" d="M8.273 7.247v8.423l-2.103-.003v-5.216l-2.03 2.404l-1.989-2.458l-.02 5.285H.001L0 7.247h2.203l1.865 2.545l2.015-2.546l2.19.001zm8.628 2.069l.025 6.335h-2.365l-.008-2.871h-2.8c.07.499.21 1.266.417 1.779c.155.381.298.751.583 1.128l-1.705 1.125c-.349-.636-.622-1.337-.878-2.082a9.296 9.296 0 0 1-.507-2.179c-.085-.75-.097-1.471.107-2.212a3.908 3.908 0 0 1 1.161-1.866c.313-.293.749-.5 1.1-.687c.351-.187.743-.264 1.107-.359a7.405 7.405 0 0 1 1.191-.183c.398-.034 1.107-.066 2.39-.028l.545 1.749H14.51c-.593.008-.878.001-1.341.209a2.236 2.236 0 0 0-1.278 1.92l2.663.033l.038-1.81h2.309zm3.992-2.099v6.627l3.107.032l-.43 1.775h-4.807V7.187l2.13.03z"/></svg>`
          
        },
        link: `https://myanimelist.net/profile/saaalt`,
        ariaLabel: 'MyAnimeList'
      },
    ],

    footer: {
      // message: '<a href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2021013135号-1</a> <br> <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21038102000366" target="_blank"><img src="https://cdn.tangjiayan.com/gongan.png">辽公网安备 21038102000366号</a>',
      copyright: 'Copyright © 2023 糖加盐'
    }
  }
})
