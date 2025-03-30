import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    pages: {
      signIn: "/login"
    },
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "text"},
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            console.log(credentials)
            if(credentials?.email == "teste@gmail.com" || credentials?.password == "123"){
              return {
                id: "1",
                name:"teste",
                email:"teste@gmail.com"
              }
            }
            return null
        }
      })
    ]
})

export { handler as GET, handler as POST }