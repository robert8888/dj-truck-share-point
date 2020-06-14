require("dotenv").config();

const fbAppId = process.env.FACEBOOK_APP_ID;
const fbAdminId = process.env.FACEBOOK_ADMIN_ID;
const recordUrl = process.env.RECORDS_URL;
const mainPage = process.env.MAIN_PAGE;

module.exports = (data) => ({
    fbAdminId,
    fbAppId,
    siteName: `Dj Truck`,
    currentUrl: data.req.protocol + '://' + data.req.get('host') + data.req.originalUrl,
    recordUrl: recordUrl + "/" + data.record.id,
    pageUrl: mainPage + `/record/${data.record.user.nickname}/${data.record.title.replace(/\s/g, "_")}/${data.record.id}`,
    //imageUrl: data.record.user.picture,
    imageUrl :  data.req.protocol + '://' + data.req.get('host') + '/logo-xb.jpg',
    recordDescription: data.record.description || data.record.title || "dj truck",
    recordTitle: data.record.user.nickname + " - " + data.record.title,
    JS_GLOBAL_REDIRECT_URL: mainPage + `/record/${data.record.user.nickname}/${data.record.title.replace(/\s/g, "_")}/${data.record.id}`,
})