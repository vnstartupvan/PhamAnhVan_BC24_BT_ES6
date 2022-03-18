/* 
1. Check validation 
2. Get value 
3. Render to HTML 
*/
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
const info = [];
const input = $$("input");
const btn1 = $(".actions ul li:nth-child(2)");
const result = $(".donate-us");
const app = {
    isClicked: false,
    inputFields: {
        lastName: input[0],
        firstName: input[1],
        email: input[2],
        phoneNumber: input[3],
        dob: input[4],
        mob: input[5],
        yob: input[6],
        address: input[7],
        travelInfo: input[8],
        healthStatus: $("select"),
    },
    /* Check validation */
    handleEvents: () => {
        /* Event submit for page no#1 */
        btn1.addEventListener("click", () => {
            let saveInfo = () => {
                let lastName = app.inputFields.lastName.value;
                let firstName = app.inputFields.firstName.value;
                let email = app.inputFields.email.value;
                let phoneNumber = app.inputFields.phoneNumber.value;
                let dob = app.inputFields.dob.value;
                let mob = app.inputFields.mob.value;
                let yob = app.inputFields.yob.value;
                let address = app.inputFields.address.value;
                return {
                    lastName,
                    firstName,
                    email,
                    phoneNumber,
                    dob,
                    mob,
                    yob,
                    address,
                };
            };
            let userInfo = saveInfo();
            if (!app.isClicked) {
                info.push(userInfo);
                app.isClicked = true;
            } else {
                app.render(info)
            }
            
        });
    },

    render: (info) => {
        info = info[0]
        let htmlContent = `
            <table>
                <tbody>
                    <tr>
                        <td>Tên: ${info.lastName}</td>
                    </tr>
                    <tr>
                        <td>Họ: ${info.firstName}</td>
                    </tr>
                    <tr>
                        <td>Email: ${info.email}</td>
                    </tr>
                    <tr>
                        <td>Số điện thoại: ${info.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td>Ngày sinh: ${info.dob}</td>
                    </tr>
                    <tr>
                        <td>Tháng sinh: ${info.mob}</td>
                    </tr>
                    <tr>
                        <td>Năm sinh: ${info.yob}</td>
                    </tr>
                    <tr>
                        <td>Địa chỉ: ${info.address}</td>
                    </tr>
                    <tr>
                        <td>Thông tin di chuyển: ${app.inputFields.travelInfo.value}</td>
                    </tr>
                    <tr>
                        <td>Tình trạng sức khỏe: ${app.inputFields.healthStatus.value}</td>
                    </tr>
                </tbody>
            </table>
        `
        result.innerHTML = htmlContent

    },
    run: () => {
        app.handleEvents();
    },
};
app.run();
