console.log("hi")
var Users = []
var resultNom = 9
var userCardContainer = document.getElementById("userCon")
// fetch("https://randomuser.me/api/").then(
//     response => response.json()
// ).then(
//     data => {
//         console.log(data);
//     }
// ).catch(
//     error => {
//         console.error("Error:", error)
//     }
// )

async function getUsers(resultToSet) {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    // const res = [
    //    
    //     {
    //         "gender": "female",
    //         "name": {
    //             "title": "Miss",
    //             "first": "Katie",
    //             "last": "Mcdonalid"
    //         },
    //         "location": {
    //             "street": {
    //                 "number": 1106,
    //                 "name": "Windsor Road"
    //             },
    //             "city": "Edinburgh",
    //             "state": "Greater Manchester",
    //             "country": "United Kingdom",
    //             "postcode": "G53 0YP",
    //             "coordinates": {
    //                 "latitude": "-30.8182",
    //                 "longitude": "-12.5912"
    //             },
    //             "timezone": {
    //                 "offset": "-11:00",
    //                 "description": "Midway Island, Samoa"
    //             }
    //         },
    //         "email": "katie.mcdonalid@example.com",
    //         "login": {
    //             "uuid": "4ebea60b-7290-4283-b688-9001f46a9c75",
    //             "username": "angryswan593",
    //             "password": "peace",
    //             "salt": "LVEtlL4H",
    //             "md5": "62512a1bd51c4f9a09e078250f0a192a",
    //             "sha1": "7333e75feb083f16bf6711e739b54bb5779cd7c5",
    //             "sha256": "50b89c928748c9f3f53be3053963d7cc227031bc9497cc067de50d86873a1f85"
    //         },
    //         "dob": {
    //             "date": "1974-06-28T12:30:16.109Z",
    //             "age": 50
    //         },
    //         "registered": {
    //             "date": "2010-10-18T11:18:51.938Z",
    //             "age": 14
    //         },
    //         "phone": "0113016 272 8939",
    //         "cell": "07438 768683",
    //         "id": {
    //             "name": "NINO",
    //             "value": "WG 55 02 07 Q"
    //         },
    //         "picture": {
    //             "large": "https://randomuser.me/api/portraits/women/9.jpg",
    //             "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
    //             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
    //         },
    //         "nat": "GB"
    //     }
    // ]


    fetch(`https://randomuser.me/api/?results=${resultToSet}`)
        .then(
            response => response.json()
        ).then(
            data => {
                const res = data.results
                console.log(data, res);
                res.forEach(data => {
                    const DOB = new Date(data.dob.date)
                    const FormatedDOB = DOB.toLocaleDateString("en-GB")
                    userCardContainer.innerHTML += `
                       <div class="card"> 
                        <div class="userImage">
                            <img src=${data.picture.large} alt="user">
                        </div>
                        <div class="userData">
                            <div class="name">
                                <b>${data.name.title}: </b>
                                <span>${data.name.first}</span>
                                <span>${data.name.last}</span>
                            </div>
                            <div class="userinfo">
                                <div class="userinfo-text">
                                    <label>Gender:</label>
                                    <span>${data.gender}</span>
                                </div>
                                <div class="userinfo-text">
                                    <label>Email:</label>
                                    <span>${data.email}</span>
                                </div>
                                <div class="userinfo-text">
                                    <label>Number:</label>
                                    <span>${data.cell}</span>
                                </div>
                                <div class="userinfo-text">
                                    <label>Age:</label>
                                    <span>${data.dob.age}</span>
                                </div>
                                <div class="userinfo-text">
                                    <label>Date of Birth:</label>
                                    <span>${FormatedDOB}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    console.log(FormatedDOB);

                })

            }
        ).catch(
            error => {
                console.error("Error:", error)
            }
        )
}


console.log(Users);

getUsers(9)
const HandlePaginate = () => {
    let resultToSet = resultNom += 9
    getUsers(resultToSet)
    console.log(resultToSet)
    console.log(resultNom)
}
