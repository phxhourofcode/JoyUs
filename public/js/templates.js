this["JST"] = this["JST"] || {};

this["JST"]["public/templates/posts/list"] = function anonymous(locals) {
var buf = [];
buf.push("<ul><li><p>Post</p></li></ul>");;return buf.join("");
};

this["JST"]["public/templates/posts/new"] = function anonymous(locals) {
var buf = [];
buf.push("<section class=\"post-new\"><form data-abide=\"true\" class=\"post-new-form\"><textarea class=\"post-new-form-content-field\"></textarea><button type=\"submit\" class=\"post-new-form-submit-btn\">Post</button></form></section>");;return buf.join("");
};