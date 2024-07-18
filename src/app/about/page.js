async function myfunction(){
    await new Promise((resolve) => {
        setTimeout(resolve ,3000)
    })
}

export default async function aboutus() {

    await myfunction()
    // throw new Error("this is manually error");
    return (<>
    <h1> this is about us page </h1>
    </>
    )
}
