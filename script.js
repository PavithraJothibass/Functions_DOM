function label_create(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}
function break_create() {
    var label_break = document.createElement("br");
    return label_break
}
function input_create(tagname, attrname, attrvalue, attrname1, attrvalue1) {
    var input_ele = document.createElement(tagname)
    input_ele.setAttribute(attrname, attrvalue)
    input_ele.setAttribute(attrname1, attrvalue1);
    return input_ele
}
var firstname = label_create("label", "for", "firstname", "Firstname");
var firstname_break = break_create();
var input_firstname = input_create("input", "type", "text", "id", "firstname")
var firstname_break = break_create();
var middlename = label_create("label", "for", "middlename", "Middlename");
var middlename_break = break_create();
var input_middlename = input_create("input", "type", "text", "id", "middlename")
var firstname_break = break_create();
var lastname = label_create("label", "for", "lastname", "Lastname");
var lastname_break = break_create();
var input_lastname = input_create("input", "type", "text", "id", "lastname")
var lastname_break = break_create();
var email = label_create("label", "for", "email", "Email");
var email_break = break_create();
var input_email = input_create("input", "type", "email", "id", "email")
var email_break = break_create();
var password = label_create("label", "for", "password", "Password");
var password_break = break_create();
var input_password = input_create("input", "type", "text", "id", "password")
var fileupload_break = break_create();
var input_fileupload = input_create("input", "type", "file", "id", "fileupload")
document.body.append(firstname, firstname_break, input_firstname,firstname_break, middlename, middlename_break, input_middlename,middlename_break, lastname, lastname_break, input_lastname,lastname_break, email, email_break, input_email, email_break,password, password_break, input_password,fileupload_break, input_fileupload);