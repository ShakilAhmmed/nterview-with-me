import application from "./application";


application.listen(process.env.PORT, () => {
    console.log(`Application Running On ${process.env.PORT}`)
})

