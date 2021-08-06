import { Wedding } from '$types/wedding'

function IconMessageBeige({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g fill="none" fillRule="evenodd">
        <g fill="#000" fillRule="nonzero">
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <g>
                        <path
                          d="M14.238 0H1.762C.79 0 0 .82 0 1.828v8.344C0 11.18.79 12 1.762 12h12.476C15.21 12 16 11.18 16 10.172V1.828C16 .82 15.21 0 14.238 0zm0 .692c.155 0 .302.034.435.094L8 6.83 1.327.786c.134-.06.28-.094.435-.094h12.476zm1.095 9.48c0 .626-.491 1.136-1.095 1.136H1.762c-.604 0-1.095-.51-1.095-1.136V1.828c0-.212.06-.408.157-.578L8 7.749l7.176-6.5c.097.171.157.367.157.58v8.343z"
                          transform="translate(-228.000000, -3852.000000) translate(0.000000, 2761.000000) translate(0.000000, 548.000000) translate(0.000000, 491.000000) translate(30.000000, 0.000000) translate(163.000000, 38.000000) translate(35.000000, 14.000000) translate(2.000000, 4.000000)"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

function IconMessagePink({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g fill="none" fillRule="evenodd">
        <g fill="#F09279" fillRule="nonzero">
          <g>
            <g>
              <g>
                <g>
                  <path
                    d="M0 11.197c0 .479.39.869.868.869h13.264c.478 0 .868-.39.868-.869V2L8.846 7.184c-.39.329-.868.493-1.346.493-.478 0-.956-.164-1.346-.493L0 2v9.197z"
                    transform="translate(-231.000000, -3710.000000) translate(30.000000, 3659.000000) translate(163.000000, 37.000000) translate(38.000000, 14.000000) translate(2.500000, 4.000000)"
                  />
                  <path
                    d="M8.332 6.293l6.65-5.602C14.9.297 14.55 0 14.132 0H.868C.45 0 .1.297.018.691l6.65 5.602c.482.406 1.182.406 1.664 0z"
                    transform="translate(-231.000000, -3710.000000) translate(30.000000, 3659.000000) translate(163.000000, 37.000000) translate(38.000000, 14.000000) translate(2.500000, 4.000000)"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

function IconMessage({
  theme,
  className,
}: {
  theme: Wedding['theme']
  className?: string
}) {
  if (theme === 'beige') {
    return <IconMessageBeige className={className} />
  }
  if (theme === 'pink') {
    return <IconMessagePink className={className} />
  }

  return null
}

export default IconMessage
