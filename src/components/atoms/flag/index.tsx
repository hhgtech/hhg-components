import React from 'react'

import { StyledFlag } from './index.styled'

type Props = {
  country: 'VN' | 'ID' | 'TH' | 'KH' | 'MY' | 'MM' | 'PH' | 'IN' | 'TW'
  width: number
  height: number
  rounded?: boolean
}

const Flag = ({ country, rounded, height, width }: Props) => {
  let flag: JSX.Element
  let flagRounded: JSX.Element
  let isBitmap = false
  switch (country) {
    case 'VN':
      flag = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
          <defs />
          <rect width="24" height="16" rx="2" fill="#DA251D" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.938 4.759l-.396 1.218a1.903 1.903 0 001.232 2.418l.457.149"
            fill="#FF0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.062 4.759l.395 1.218a1.903 1.903 0 01-1.232 2.418l-.457.149"
            fill="#FF0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.259 6.903l-1.465.027c-1.085.02-1.96.872-1.984 1.93l-.008.36"
            fill="#FF0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.298 7.013l-1.202.783c-.89.579-2.135.37-2.821-.474l-.233-.287"
            fill="#FF0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.105 10.586l-.453-1.22c-.37-.997-1.487-1.552-2.53-1.258l-.447.126"
            fill="#FF0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.006 10.653l-1.104-.78c-.9-.637-1.121-1.8-.5-2.635l.267-.357"
            fill="#FF0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.738 6.903l1.465.026c1.085.02 1.96.872 1.984 1.932l.008.359"
            fill="#FF0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.7 7.013l1.202.782c.89.58 2.135.37 2.821-.474l.233-.286"
            fill="#FF0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.892 10.586l.453-1.22c.37-.997 1.487-1.552 2.53-1.258l.447.126"
            fill="#FF0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.991 10.654l1.104-.78c.901-.637 1.122-1.8.5-2.635l-.267-.357"
            fill="#FF0"
          />
        </svg>
      )
      flagRounded = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <defs />
          <mask
            id="a"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <circle cx="10" cy="10" r="10" fill="#C4C4C4" />
          </mask>
          <g mask="url(#a)">
            <path fill="#DA251D" d="M-4-.017h28v20H-4z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.928 5.932L8.774 9.736l2.663.927"
              fill="#FF0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.072 5.932l1.154 3.804-2.663.927"
              fill="#FF0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.804 8.613l-3.975.078-.059 2.82"
              fill="#FF0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.849 8.75l-3.262 2.273-1.704-2.246"
              fill="#FF0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.458 13.215L11.155 9.46l-2.699.815"
              fill="#FF0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.342 13.3l-3.17-2.4 1.61-2.315"
              fill="#FF0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.195 8.613l3.975.078.059 2.82"
              fill="#FF0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.15 8.75l3.262 2.273 1.704-2.246"
              fill="#FF0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.541 13.215L8.844 9.46l2.699.815"
              fill="#FF0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.657 13.3l3.17-2.4-1.61-2.315"
              fill="#FF0"
            />
          </g>
        </svg>
      )
      break
    case 'ID':
      flag = (
        <img
          height={height}
          width={width}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAhCAYAAACfiCi5AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACrSURBVHgB7dY9CgIxEIbhb8JqnV6QNILltnbuUTyRR/AK3kBrm/UIOUJKwZ9x0tsPn8wDCSFVXkggQPAlfbrlzbgQHBWyBwGBXh/6POxarTLnbVH5zLafwaW9VKcEvE/gO3yXB7s1SYXj2vwmYwK3zB6ACPAWAd4iwFsEeKMPGJbrFZiJGhCLN+AtArxFgLcI8BYB3v4ioIFX6wF38Dr332ixxcVGAZdqY/oC5+Yj9mTCW5wAAAAASUVORK5CYII="
        />
      )
      flagRounded = (
        <img
          height={height}
          width={width}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI/SURBVHgBzZlBbtNAFIb/NyVha7pFQo5EVXakqliwwjkCN+gN0p4gzQkaTkBu0CPErBFyWFYgxVyAzBIV4cd7jp1GrZPaqWXPJ73EY4+TX//MvLxxCHvy1XsdGBz0DfEHafYZ8LAKxRI4BihOGN8TJOE7+zPEHlCVzpHnezDdITPON8SUJSZC+Ce5Hb+3cVz2plICV8I6I2Y6Rw2I0GlZoY8KjLzjIRNforpjjxEz8/jU/pju6rRTYHR4dFWXa1sFEE1Oft9cbL1edDIdUupcMyhAI/Cc+O/gxMb2/hVT2J06s+bEKdSX77wuuvJAoA6r3oDGoSA6PL56cHaz8c07OpM58RktInP+4tTeTPL2WmDkvfGZkpkc+mgXS3zby+fj3RCbZIT2xSmSc5+P8kbqYObeAg4hLr5QF1cOrtxzisR00/ybCpTf1gCOQYxh+q5VyQGZGRzkHycDY2ACOEpazhnCWziK1JSBYTdSSzFini4SH+7iPeu+ell3nVcnHknRyHAYHWILd7GuC4xV4Bzu8ksFfoG7zF13MEzLLVnIS9S/rXwqstGnXl6wfoJ7hPqSO6juLeEWPXEwXcW6edZU45KLUxWnB+tNU+ailv1tz8VYYpALXG+aMhfHaJ9xLq4QcXLC7TFBGaTjjJsnKtJitmj8iGYTeCgxQFW4meEuN6w7RJ5JLLh+lhL1PHuUD/IlplwfOjL1p7MNoQuujjp2WVVYpaf898QG8qah21Y/i/XfEFnoQtNybi65LcQe/Ac3Z/ssZ43zngAAAABJRU5ErkJggg=="
        />
      )
      isBitmap = true
      break
    case 'TH':
      flag = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 17">
          <defs />
          <rect y=".983" width="24" height="16" rx="2" fill="#ED1C24" />
          <path fill="#fff" d="M0 3.65h24v10.667H0z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6.317h24v5.333H0V6.317z"
            fill="#241D4F"
          />
        </svg>
      )
      flagRounded = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <defs />
          <mask
            id="a"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <circle cx="10" cy="10" r="10" fill="#C4C4C4" />
          </mask>
          <g mask="url(#a)">
            <path fill="#ED1C24" d="M-4-.017h28v20H-4z" />
            <path fill="#fff" d="M-4 3.317h28V16.65H-4z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-4 6.65h28v6.667H-4V6.65z"
              fill="#241D4F"
            />
          </g>
        </svg>
      )
      break
    case 'KH':
      flag = (
        <img
          width={width}
          height={height}
          src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJySURBVHgB7Vc9SxxRFD0jSREhOLJVJOBUto6k2kr/wIJtKk0TsDIh+QEp0i6pU8VOSLUhVkJgrNIoGdttHEFMNbCLshYh2ZzzPuKkEXd2l3VkD1zeve9j55z77h1mAxDfgegh8IluTAtx99H6BbyuA1ngyP9ANYgX0aGIlRmS/4DqkRdCVU1wCPRRXXRmUG2EVReAqYBJYyrgJlzQzjFejFXAfsT3XIyxYqQCkoKvzO9nwPv0/1tIMFqMTIBINnFN8CdtidagHbm5PbenKOgCw2EoAY0CmUvaM9qBiz0xkW87/2thDu7sWwyH0gJEagE2q4IyK/KHbm3XrZ272I+XhTO7bv4I5VH6W+idI6IyeewsKcQe/iYW3CiyuqknzlepPae9RDkEwMcSAnKEYdOMwFN0OsDm5hmyDMaPIrtLsfyUjby2xo/4lp0PQ+1bovWwuHiF01PNvqHVMCgeoBRqxtbXJeSMJIBuF9jY4C0klmDA1CwvW0Grq/aU/O1tGMInJ20cH9v5brfOtcHJC6V7IIoemewqy3FssywcsBHm52FEeYiwBEmAF6Izc3N2DIf4N1KqhOL4Mx+aksgVxx50G1GUGzGWTI1jTlGz9Htcq/0jbsvPxlkmf9YkI0nqjBsYFAPeQJsPa1LAN0MkTXtuPjfkVD6epMSIvI+92RLT/tyITZIefydnj+zxd5u4funeDgP1QBznrHtlr26IiYDKyJeEmtSXlZp2Z8efsyXmm9uf8Q2udfkyiZPI26LkW+juYPo5PWlMBUwa90JABxUGBQQpKov+Fwr4/QLVvAVy7r+igK0M+LPCoIVqQMQTy3kr+wueZ930/zXoUQAAAABJRU5ErkJggg=="
        />
      )
      flagRounded = (
        <img
          width={width}
          height={height}
          src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAStSURBVHgBzVjPaxxVHP/MpiGJl05QBEHpFKHWUyYWRU/ZelIqNOIf0BakmFNbPHnKLnrwotmcYirS7VEvVlyheHFDxVpU3FwFcaIlVKFkiyVt03a3n8+8eclsdjOzu9nu5gNv5/34znuf9/l+348dB13iFyDLh+8AU3oyuVESqkyBUh1Y5rP8MhO6gNOJ8e8kUAPOcNCzMTLtIuBg5Q0g/5oh3zuCEbHZiNiuwUGL7RJNJfgrFeMjh84VS0PASedfIdkko0SCvwFzvVItgUDhCHAuob0ZculD4GuYhdAPVIaAo5NmcTUg08qa5H5A/8gJfiRIE5oIyq0w20a/kY3GbkCDi2lwkjF3AQMExz/HPbNgy5sErwLesHGth8Giyng8aONx08UkN4vBkxPCPdcWQgUj9f7CHgJVHJeKoYLDMca7wRVu5T956AkeRPuvdXEWu8T/TFc9XiJ8k98tHHOCIRPdSjx0iD+p1r+xw487AP5jecg1eYt119h2AVfcpGAWXSDP9HmsPOKxoyx7JZmHsV30U6ZP0DX8DKWcSLNaZfpim1pPk0Q15s5K1O55Rkn73k2Wn6DdH7H+vnLbDoNQQS/NqgQTX6tReYwD+kwTE4bMalR34ABw/LghpDqReonX2ampLbeL2Pfs6zzSQXITbREMPOM+kZG7tBC86K2PXEP+NvO3bgEXLwJ/rwE/sr7Edxy6aHycZLPmXcWjJnczddTwVHFFMDGEczCKrK2ZmWuA51m+dAlYWQHeOQkc4iYVBEbB/fsNoRfnjHIqF4vAkawhpVDR5Da8tlR0Ob/FerLNh5zx9VBBkRCkgBZDuWyUrVQMObtI8nljo3rX3cpXqya5Ecli8RDL7yeOvg/mzNtRRdf1Q4LWpepcyois8opDkVPeTkBxKNfKTi5XW3yC6qtQUP1zIeEEhCdJoonrPhV2LCL1unnGYQdt6pm9Li011mkiqrcTAp5FCgISdCpJFtXq+uYsFVuKO7lWC0LxJSgel5cbycWVUV7vaDJKcVcno77CM/nNZ7ig32jV7PtFTE9fYe4+Fhe3Vq6IykVjYybJnVJlfh64dg2Y5Cl/4wYwOmpi7/JlsB/g3j1TJ7vDh9X/Mu7ele0LOxH8cl9rBf8hmRI7qDTMuhJZiqiNwbhiVjXZqV129h27SIR4m++XWL7OttfZ0kS0TBfPlLEtDqenv8XsbCUMcnWkABdOnDArUvVSTNCCEFRnySpv7azqtk72elf11mZursIxS9vJBeIW3agXcnRz7Mq1znQH/ceTsbxTBE6figheoLM21rCnUDtIBYPoPniKjqnPY89A6s0EysX+do7kkLIn9gkBL2x5W4gRlIrIY+Co5a16wlBjY+ln4C3ucs6rGAgUZjMfx2t2+Hh0nv+P61n0FdqPT09ur820Nh5+mz+JR2BvUS9zzKOtWlK+D37GA805g8cKufW9szu1DiW+ixJP0WO8Hjjc83v+AVOL8gOSyyUZpRAUvqOrj33DmY5HRHsAqTbCMHq3nGaZ+gm4EQsewn8BGZ28HjoDFauR2Ggh2tLaQocE41jIIvxP7fAK63gwhN0tMnWRoPq1JbNCw0tJx3gEWKZ5qBk6FugAAAAASUVORK5CYII="
        />
      )
      isBitmap = true
      break
    case 'MY':
      flag = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
          <defs />
          <rect width="24" height="16" rx="2" fill="#CC0001" />
          <path fill="#fff" d="M0 12.271h24v.777H0z" />
          <path
            fill="#fff"
            d="M0 12.19h24v.777H0zM0 13.714h24v.777H0zM0 10.716h24v.777H0zM0 9.161h24v.777H0zM0 7.606h24v.777H0zM0 6.051h24v.777H0zM0 4.497h24v.777H0zM0 2.941h24v.777H0zM0 1.524h24v.777H0zM0 0h24v.777H0z"
          />
          <path d="M0 2a2 2 0 012-2h10v8.38H0v-6.38z" fill="#010066" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.936 1.524c-1.424 0-2.58 1.045-2.58 2.332 0 1.288 1.156 2.333 2.58 2.333.515 0 .994-.137 1.397-.372a2.502 2.502 0 01-.748.114c-1.263 0-2.288-.927-2.288-2.068 0-1.142 1.025-2.069 2.288-2.069.279 0 .546.046.794.129a2.763 2.763 0 00-1.443-.4z"
            fill="#FC0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.216 5.07l-1.087-.514.322 1.053-.727-.88-.227 1.07-.223-1.071-.73.878.325-1.052-1.089.512.809-.823-1.232.043 1.133-.431-1.131-.434 1.231.046-.805-.825 1.086.514-.321-1.052.727.88.227-1.071.223 1.072.73-.879-.325 1.052 1.088-.511-.808.823 1.231-.043-1.132.43 1.13.435-1.23-.047.805.825z"
            fill="#FC0"
          />
        </svg>
      )
      flagRounded = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <defs />
          <mask
            id="a"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <circle cx="10" cy="10" r="10" fill="#C4C4C4" />
          </mask>
          <g mask="url(#a)">
            <path fill="#CC0001" d="M0 1h20v20H0z" />
            <path fill="#fff" d="M0 16.106h20v1.02H0z" />
            <path
              fill="#fff"
              d="M0 16h20v1.02H0zM0 18h20v1.02H0zM0 14.065h20v1.02H0zM0 12.024h20v1.02H0zM0 9.983h20v1.02H0zM0 7.943h20v1.02H0zM0 5.902h20v1.02H0zM0 3.861h20v1.02H0zM0 2h20v1.02H0zM0 0h20v1.02H0z"
            />
            <path fill="#010066" d="M0-1h10v12H0z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.114 3.86c-1.187 0-2.15 1.372-2.15 3.062 0 1.69.963 3.061 2.15 3.061.429 0 .828-.179 1.164-.487a1.401 1.401 0 01-.624.149c-1.052 0-1.906-1.216-1.906-2.715 0-1.498.854-2.714 1.906-2.714.233 0 .456.06.662.168-.343-.33-.757-.523-1.202-.523z"
              fill="#FC0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.68 8.516l-.906-.675.267 1.381-.605-1.155-.19 1.406-.185-1.407-.608 1.153.27-1.38-.907.67.674-1.08-1.026.057.943-.566-.942-.57 1.026.061L4.82 5.33l.905.675-.267-1.382.605 1.156.19-1.407.185 1.407.609-1.153-.271 1.38.907-.67-.674 1.08 1.026-.057-.943.566.942.57-1.026-.061.671 1.083z"
              fill="#FC0"
            />
          </g>
        </svg>
      )
      break
    case 'MM':
      flag = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
          <defs />
          <rect width="24" height="16" rx="2" fill="#FECB00" />
          <rect y="8.381" width="24" height="7.619" rx="2" fill="#EA2839" />
          <path fill="#34B233" d="M0 5.87h24v4.935H0z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.77 8.63l1.384-3.94 1.384 3.94H10.77z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.31 9.355L9.587 11.82l1.486-3.91 2.239 1.445z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.787 9.802L8 7.415l4.644.048-.856 2.34z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.667 7.459l4.643-.048-3.788 2.387-.855-2.34z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.236 7.906l1.486 3.911-3.725-2.465 2.24-1.446z"
            fill="#fff"
          />
        </svg>
      )
      flagRounded = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <defs />
          <mask
            id="a"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <circle cx="10" cy="10" r="10" fill="#C4C4C4" />
          </mask>
          <g mask="url(#a)">
            <path fill="#FECB00" d="M-4-1h28v11H-4z" />
            <path fill="#EA2839" d="M-4 10h28v10H-4z" />
            <path fill="#34B233" d="M-4 6.704h28v6.478H-4z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.565 10.327l1.615-5.172 1.614 5.172H8.565z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.53 11.277l-4.347 3.236L8.917 9.38l2.612 1.897z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.752 11.865L5.332 8.73l5.417.063-.997 3.07z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.61 8.79l5.418-.063-4.42 3.133-.998-3.07z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.442 9.377l1.735 5.133-4.346-3.236 2.611-1.897z"
              fill="#fff"
            />
          </g>
        </svg>
      )
      break
    case 'PH':
      flag = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
          <defs />
          <mask
            id="a"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="16"
          >
            <rect width="24" height="16" rx="2" fill="#C4C4C4" />
          </mask>
          <g mask="url(#a)">
            <path
              d="M-4.286-1.2h16.714L27-.4l-.858 8.8-7.285 4.03h-13.8L-4.286-1.2z"
              fill="#0038A8"
            />
            <path
              d="M5.057 7.605h21.514L24.857 16.4H-.857l5.914-3.97V7.606z"
              fill="#CE1126"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.025 7.605L-2.572 18l-.857-8V-2.4"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.723 7.071v.97l-.6-.784.971.3-.972.299.6-.785zM6.216 11.3l-.9-.486 1.029-.093-.764.636.208-.936.427.878zM5.217 4.445l.9-.485-.428.878-.208-.936.765.636-1.029-.093zM7.714 8.57c.508 0 .92-.432.92-.965 0-.533-.412-.965-.92-.965s-.92.432-.92.965c0 .533.412.965.92.965z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.977 7.604l.14.146 1.595-.146-1.596-.147-.14.147zM6.237 7.877l.107.112 1.369-.385-1.476.273zM6.237 7.331l.107-.112 1.369.385-1.476-.273zM6.48 6.395l-.012.196 1.24.95L6.69 6.384l-.21.011z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.456 6.76l-.009.15 1.26.63-1.25-.78z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.87 6.374l.16-.009.676 1.176-.836-1.167z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.647 5.936l-.157.13.157 1.49.157-1.49-.157-.13zM7.354 6.178l-.12.1.412 1.277-.292-1.377z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.939 6.178l.12.1-.413 1.277.293-1.377zM8.94 6.405l-.209-.012L7.713 7.55l1.24-.95-.012-.195z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.55 6.383l-.16-.009-.677 1.176.837-1.167zM8.964 6.77l.009.149-1.26.631 1.25-.78zM9.45 7.606l-.14-.146-1.597.146 1.597.147.14-.147zM9.188 7.333l-.106-.112-1.37.385 1.476-.273z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.188 7.879l-.106.111-1.37-.384 1.476.273zM8.948 8.815l.012-.196-1.24-.95 1.018 1.157.21-.011z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.971 8.45l.01-.15-1.26-.63 1.25.78z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.558 8.836l-.16.009-.677-1.176.837 1.167z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.781 9.274l.157-.13-.157-1.49-.157 1.49.157.13z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.074 9.032l.12-.1-.413-1.277.293 1.377z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.489 9.032l-.12-.1.412-1.277-.292 1.377zM6.486 8.805l.21.012L7.713 7.66l-1.24.95.013.195z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.877 8.827l.16.008.676-1.175-.836 1.167z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.463 8.44l-.01-.149 1.26-.631-1.25.78z"
              fill="#FCD116"
            />
          </g>
        </svg>
      )
      flagRounded = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <defs />
          <mask
            id="a"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <circle cx="10" cy="10" r="10" fill="#C4C4C4" />
          </mask>
          <g mask="url(#a)">
            <path
              d="M1.9 3.476L9.5-5.5 18 3.476 21.5 9.5 18 15.539H1.9V3.476z"
              fill="#0038A8"
            />
            <path
              d="M1.9 9.507H21L19 20.5 3 20l-1.1-4.461V9.507z"
              fill="#CE1126"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.196 9.507L1.9 15.539-3.5 13l5.4-9.524"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.678 8.84v1.212l-.701-.98 1.134.374-1.134.375.7-.981zM3.251 14.125l-1.05-.607 1.2-.116-.891.795.242-1.17.5 1.098zM2.086 5.557l1.05-.606-.499 1.097-.243-1.17.892.795-1.2-.116zM5 10.713c.592 0 1.072-.54 1.072-1.206 0-.666-.48-1.206-1.073-1.206s-1.073.54-1.073 1.206c0 .666.48 1.206 1.073 1.206z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.973 9.507l.163.183 1.862-.183-1.862-.183-.163.183zM3.276 9.848l.125.14 1.597-.48-1.722.34zM3.276 9.166l.125-.14 1.597.481-1.722-.341zM3.558 7.996l-.014.245L4.99 9.428 3.803 7.982l-.245.014z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.531 8.452l-.01.187 1.469.789-1.459-.976zM4.014 7.97l.187-.011.789 1.469-.976-1.459z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.921 7.422l-.183.163.183 1.862.183-1.862-.183-.163zM4.58 7.725l-.14.125.48 1.597-.34-1.722z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.262 7.725l.14.125-.481 1.597.341-1.722zM6.431 8.007l-.245-.014L5 9.439l1.446-1.187-.014-.245zM5.976 7.98l-.187-.01-.79 1.469.977-1.459z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.458 8.463l.01.187L5 9.438l1.459-.976zM7.023 9.507l-.162-.183-1.863.183 1.863.183.162-.183zM6.72 9.166l-.125-.14-1.597.481 1.722-.341zM6.72 9.848l-.125.14-1.597-.48 1.722.34zM6.439 11.018l.014-.244-1.446-1.188 1.187 1.447.245-.015z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.466 10.562l.01-.187-1.469-.789 1.459.976zM5.983 11.045l-.186.01-.79-1.469.976 1.459z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.076 11.592l.183-.162-.183-1.863-.183 1.863.183.162zM5.417 11.29l.14-.125-.48-1.597.34 1.721z"
              fill="#FCD116"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.735 11.29l-.14-.125.481-1.597-.341 1.721zM3.565 11.007l.245.014 1.187-1.446-1.446 1.188.014.244zM4.02 11.034l.187.01.79-1.469-.976 1.459zM3.538 10.552l-.01-.187 1.469-.79-1.459.977z"
              fill="#FCD116"
            />
          </g>
        </svg>
      )
      break
    case 'IN':
      flag = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
          <defs />
          <mask
            id="a"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="16"
          >
            <rect width="24" height="16" rx="2" fill="#C4C4C4" />
          </mask>
          <g mask="url(#a)">
            <circle cx="12" cy="8" r="10" fill="#D8D8D8" />
            <path fill="#F93" d="M-2.95-1.95h29.851v19.901H-2.95z" />
            <path fill="#fff" d="M-2.95 4.683h29.851v6.634H-2.95z" />
            <path fill="#128807" d="M-2.95 11.317h29.851v6.634H-2.95z" />
            <circle cx="11.975" cy="8" r="2.653" fill="#008" />
            <circle cx="11.975" cy="8" r="2.322" fill="#fff" />
            <circle cx="11.975" cy="8" r=".464" fill="#008" />
            <circle cx="14.277" cy="8.303" r=".116" fill="#008" />
            <path
              d="M11.975 10.322l.08-1.393-.08-.664-.08.664.08 1.393z"
              fill="#008"
            />
            <circle cx="14.12" cy="8.889" r=".116" fill="#008" />
            <path
              d="M11.374 10.243l.437-1.325.095-.662-.248.62-.284 1.367z"
              fill="#008"
            />
            <circle cx="13.817" cy="9.413" r=".116" fill="#008" />
            <path
              d="M10.815 10.01l.765-1.166.263-.614-.4.534-.628 1.247z"
              fill="#008"
            />
            <circle cx="13.389" cy="9.842" r=".116" fill="#008" />
            <path
              d="M10.333 9.642l1.041-.93.413-.524-.525.412-.929 1.042z"
              fill="#008"
            />
            <circle cx="12.863" cy="10.145" r=".116" fill="#008" />
            <path
              d="M9.965 9.161l1.246-.628.535-.4-.615.263-1.166.765z"
              fill="#008"
            />
            <circle cx="12.278" cy="10.302" r=".116" fill="#008" />
            <path
              d="M9.732 8.6l1.367-.283.62-.248-.662.094-1.325.438z"
              fill="#008"
            />
            <circle cx="11.672" cy="10.302" r=".116" fill="#008" />
            <path d="M9.653 8l1.393.08.664-.08-.664-.08L9.653 8z" fill="#008" />
            <circle cx="11.087" cy="10.145" r=".116" fill="#008" />
            <path
              d="M9.732 7.4l1.325.437.662.094-.62-.248-1.367-.284z"
              fill="#008"
            />
            <circle cx="10.561" cy="9.842" r=".116" fill="#008" />
            <path
              d="M9.965 6.84l1.166.765.615.262-.535-.4-1.246-.628z"
              fill="#008"
            />
            <circle cx="10.134" cy="9.413" r=".116" fill="#008" />
            <path
              d="M10.333 6.358l.929 1.042.525.412-.413-.525-1.041-.929z"
              fill="#008"
            />
            <circle cx="9.83" cy="8.889" r=".116" fill="#008" />
            <path
              d="M10.815 5.99l.627 1.246.4.534-.262-.614-.765-1.167z"
              fill="#008"
            />
            <circle cx="9.674" cy="8.303" r=".116" fill="#008" />
            <path
              d="M11.374 5.758l.284 1.366.248.62-.095-.661-.437-1.325z"
              fill="#008"
            />
            <circle cx="9.674" cy="7.697" r=".116" fill="#008" />
            <path
              d="M11.975 5.678l-.08 1.393.08.664.08-.664-.08-1.393z"
              fill="#008"
            />
            <circle cx="9.83" cy="7.111" r=".116" fill="#008" />
            <path
              d="M12.576 5.758l-.437 1.325-.095.66.248-.62.284-1.365z"
              fill="#008"
            />
            <circle cx="10.134" cy="6.587" r=".116" fill="#008" />
            <path
              d="M13.137 5.99l-.766 1.166-.263.614.401-.534.628-1.247z"
              fill="#008"
            />
            <circle cx="10.561" cy="6.158" r=".116" fill="#008" />
            <path
              d="M13.617 6.358l-1.041.93-.413.525.525-.413.93-1.042z"
              fill="#008"
            />
            <circle cx="11.087" cy="5.855" r=".116" fill="#008" />
            <path
              d="M13.986 6.84l-1.246.627-.535.4.614-.262 1.167-.766z"
              fill="#008"
            />
            <circle cx="11.672" cy="5.698" r=".116" fill="#008" />
            <path
              d="M14.218 7.4l-1.367.283-.62.248.662-.094 1.325-.438z"
              fill="#008"
            />
            <circle cx="12.278" cy="5.698" r=".116" fill="#008" />
            <path
              d="M14.297 8l-1.393-.08-.664.08.664.08L14.297 8z"
              fill="#008"
            />
            <circle cx="12.863" cy="5.855" r=".116" fill="#008" />
            <path
              d="M14.218 8.6l-1.325-.437-.662-.094.62.248 1.367.284z"
              fill="#008"
            />
            <circle cx="13.389" cy="6.158" r=".116" fill="#008" />
            <path
              d="M13.986 9.16l-1.167-.765-.614-.262.535.4 1.246.628z"
              fill="#008"
            />
            <circle cx="13.817" cy="6.587" r=".116" fill="#008" />
            <path
              d="M13.617 9.642L12.688 8.6l-.525-.412.413.525 1.041.929z"
              fill="#008"
            />
            <circle cx="14.12" cy="7.111" r=".116" fill="#008" />
            <path
              d="M13.137 10.01l-.628-1.246-.4-.534.262.614.766 1.167z"
              fill="#008"
            />
            <circle cx="14.277" cy="7.697" r=".116" fill="#008" />
            <path
              d="M12.576 10.243l-.284-1.367-.248-.62.095.662.437 1.325z"
              fill="#008"
            />
          </g>
        </svg>
      )
      flagRounded = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <defs />
          <mask
            id="a"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <circle cx="10" cy="10" r="10" fill="#C4C4C4" />
          </mask>
          <g mask="url(#a)">
            <circle cx="10" cy="10" r="10" fill="#D8D8D8" />
            <mask
              id="b"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <circle cx="10" cy="10" r="10" fill="#fff" />
            </mask>
            <g mask="url(#b)">
              <path fill="#F93" d="M-4.95.05h29.851v19.901H-4.95z" />
              <path fill="#fff" d="M-4.95 6.683h29.851v6.634H-4.95z" />
              <path fill="#128807" d="M-4.95 13.317h29.851v6.634H-4.95z" />
              <circle cx="9.975" cy="10" r="2.653" fill="#008" />
              <circle cx="9.975" cy="10" r="2.322" fill="#fff" />
              <circle cx="9.975" cy="10" r=".464" fill="#008" />
              <circle cx="12.277" cy="10.303" r=".116" fill="#008" />
              <path
                d="M9.975 12.322l.08-1.393-.08-.664-.08.664.08 1.393z"
                fill="#008"
              />
              <circle cx="12.12" cy="10.889" r=".116" fill="#008" />
              <path
                d="M9.374 12.243l.437-1.325.095-.662-.248.62-.284 1.367z"
                fill="#008"
              />
              <circle cx="11.817" cy="11.414" r=".116" fill="#008" />
              <path
                d="M8.814 12.01l.766-1.166.263-.614-.4.534-.629 1.247z"
                fill="#008"
              />
              <circle cx="11.389" cy="11.842" r=".116" fill="#008" />
              <path
                d="M8.333 11.642l1.041-.93.413-.524-.525.412-.929 1.042z"
                fill="#008"
              />
              <circle cx="10.863" cy="12.145" r=".116" fill="#008" />
              <path
                d="M7.965 11.161l1.246-.628.535-.4-.615.263-1.166.765z"
                fill="#008"
              />
              <circle cx="10.278" cy="12.302" r=".116" fill="#008" />
              <path
                d="M7.732 10.6l1.367-.283.62-.248-.662.094-1.325.438z"
                fill="#008"
              />
              <circle cx="9.672" cy="12.302" r=".116" fill="#008" />
              <path
                d="M7.653 10l1.393.08.664-.08-.664-.08-1.393.08z"
                fill="#008"
              />
              <circle cx="9.087" cy="12.145" r=".116" fill="#008" />
              <path
                d="M7.732 9.4l1.325.437.662.094-.62-.248-1.367-.284z"
                fill="#008"
              />
              <circle cx="8.561" cy="11.842" r=".116" fill="#008" />
              <path
                d="M7.965 8.84l1.166.765.615.262-.535-.4-1.246-.628z"
                fill="#008"
              />
              <circle cx="8.134" cy="11.414" r=".116" fill="#008" />
              <path
                d="M8.333 8.358L9.262 9.4l.525.412-.413-.525-1.041-.929z"
                fill="#008"
              />
              <circle cx="7.83" cy="10.889" r=".116" fill="#008" />
              <path
                d="M8.814 7.99l.628 1.246.4.534-.262-.614-.766-1.167z"
                fill="#008"
              />
              <circle cx="7.674" cy="10.303" r=".116" fill="#008" />
              <path
                d="M9.374 7.758l.284 1.366.248.62-.095-.661-.437-1.325z"
                fill="#008"
              />
              <circle cx="7.674" cy="9.697" r=".116" fill="#008" />
              <path
                d="M9.975 7.678l-.08 1.393.08.664.08-.664-.08-1.393z"
                fill="#008"
              />
              <circle cx="7.83" cy="9.111" r=".116" fill="#008" />
              <path
                d="M10.576 7.758l-.437 1.325-.095.66.248-.62.284-1.365z"
                fill="#008"
              />
              <circle cx="8.134" cy="8.587" r=".116" fill="#008" />
              <path
                d="M11.137 7.99l-.766 1.166-.263.614.401-.534.628-1.247z"
                fill="#008"
              />
              <circle cx="8.561" cy="8.158" r=".116" fill="#008" />
              <path
                d="M11.617 8.358l-1.041.93-.413.525.525-.413.93-1.042z"
                fill="#008"
              />
              <circle cx="9.087" cy="7.855" r=".116" fill="#008" />
              <path
                d="M11.986 8.84l-1.246.627-.535.4.614-.262 1.167-.766z"
                fill="#008"
              />
              <circle cx="9.672" cy="7.698" r=".116" fill="#008" />
              <path
                d="M12.218 9.4l-1.367.283-.62.248.662-.094 1.325-.438z"
                fill="#008"
              />
              <circle cx="10.278" cy="7.698" r=".116" fill="#008" />
              <path
                d="M12.297 10l-1.393-.08-.664.08.664.08 1.393-.08z"
                fill="#008"
              />
              <circle cx="10.863" cy="7.855" r=".116" fill="#008" />
              <path
                d="M12.218 10.6l-1.325-.437-.662-.094.62.248 1.367.284z"
                fill="#008"
              />
              <circle cx="11.389" cy="8.158" r=".116" fill="#008" />
              <path
                d="M11.986 11.16l-1.167-.765-.614-.262.535.4 1.246.628z"
                fill="#008"
              />
              <circle cx="11.817" cy="8.587" r=".116" fill="#008" />
              <path
                d="M11.617 11.642l-.929-1.041-.525-.413.413.525 1.041.929z"
                fill="#008"
              />
              <circle cx="12.12" cy="9.111" r=".116" fill="#008" />
              <path
                d="M11.137 12.01l-.628-1.246-.4-.534.262.614.766 1.167z"
                fill="#008"
              />
              <circle cx="12.277" cy="9.697" r=".116" fill="#008" />
              <path
                d="M10.576 12.243l-.284-1.367-.248-.62.095.662.437 1.325z"
                fill="#008"
              />
            </g>
          </g>
        </svg>
      )
      break
    case 'TW':
      flag = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
          <defs />
          <rect width="24" height="16" rx="2" fill="#ED1E24" />
          <path d="M0 2a2 2 0 012-2h13v10H0V2z" fill="#2B2F84" />
          <circle cx="7.498" cy="4.999" r="1.869" fill="#fff" />
          <path
            d="M7.936 2.894l-.439-1.637-.44 1.641c.232-.056.584-.069.879-.004zM6.825 2.957L5.627 1.759l.44 1.64c.172-.164.47-.35.758-.442zM5.894 3.567l-1.637-.439 1.2 1.201c.068-.228.233-.539.437-.762zM5.393 4.56L3.756 5l1.64.439a2.135 2.135 0 01-.003-.878zM5.455 5.672L4.257 6.87l1.64-.44a2.136 2.136 0 01-.442-.758zM6.066 6.603L5.627 8.24l1.201-1.202a2.134 2.134 0 01-.762-.435zM7.059 7.104l.438 1.637.44-1.64c-.232.055-.583.068-.878.003zM8.17 7.041L9.368 8.24l-.44-1.641c-.172.164-.47.351-.758.442zM9.102 6.431l1.636.439-1.2-1.201c-.068.228-.232.54-.436.762zM9.603 5.438l1.636-.439-1.64-.44c.056.232.069.583.004.879zM9.54 4.326l1.199-1.198-1.641.44c.164.172.351.47.442.758zM8.93 3.395l.438-1.636-1.201 1.2c.228.068.54.232.763.436z"
            fill="#fff"
          />
        </svg>
      )
      flagRounded = (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <defs />
          <mask
            id="a"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <circle cx="10" cy="10" r="10" fill="#C4C4C4" />
          </mask>
          <g mask="url(#a)">
            <circle cx="10" cy="10" r="10" fill="#D8D8D8" />
            <mask
              id="b"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <circle cx="10" cy="10" r="10" fill="#fff" />
            </mask>
            <g mask="url(#b)">
              <path fill="#ED1E24" d="M0 0h30v20H0z" />
              <path fill="#2B2F84" d="M0 0h15v10H0z" />
              <circle cx="7.498" cy="4.999" r="1.869" fill="#fff" />
              <path
                d="M7.936 2.894l-.439-1.637-.44 1.641c.232-.056.584-.069.879-.004zM6.825 2.957L5.627 1.759l.44 1.64c.172-.164.47-.35.758-.442zM5.894 3.567l-1.637-.439 1.2 1.201c.068-.228.233-.539.437-.762zM5.393 4.56L3.756 5l1.64.439a2.135 2.135 0 01-.003-.878zM5.455 5.672L4.257 6.87l1.64-.44a2.136 2.136 0 01-.442-.758zM6.066 6.603L5.627 8.24l1.201-1.202a2.134 2.134 0 01-.762-.435zM7.059 7.104l.438 1.637.44-1.64c-.232.055-.583.068-.878.003zM8.17 7.041L9.368 8.24l-.44-1.641c-.172.164-.47.351-.758.442zM9.102 6.431l1.636.439-1.2-1.201c-.068.228-.232.54-.436.762zM9.603 5.438l1.636-.439-1.64-.44c.056.232.069.583.004.879zM9.54 4.326l1.199-1.198-1.641.44c.164.172.351.47.442.758zM8.93 3.395l.438-1.636-1.201 1.2c.228.068.54.232.763.436z"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
      )
      break
    default:
      flag = undefined
      flagRounded = undefined
  }

  return (
    <StyledFlag
      data-is-bitmap={isBitmap || undefined}
      theme={{ width, height }}
    >
      {rounded ? flagRounded : flag}
    </StyledFlag>
  )
}

export { Flag }
