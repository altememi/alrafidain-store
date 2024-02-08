export default function SignupLayout({ children }: { children: React.ReactNode }) {

  return (
          <section className='flex flex-col min-h-screen'>
            <main className='flex-grow'>{children}</main>
          </section>
  )
}
