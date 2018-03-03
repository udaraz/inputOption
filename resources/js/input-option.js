$(function() {


    $.widget("custom.inputOption", {

        // default options
        options: {
            clearBtn: true,
            mainBtnIcon: "far fa-bell",
            btnModalStatus: true, //options: disable ,enable or true, false
            btnClearStatus: true, //options: disable ,enable or true, false
            btnMethod: "",
            clearMethod: "",
            //other options
            //placeholder:"",


        },

        _create: function() {

            this.element.addClass("form-control");
            this.element.attr("placeholder", this.options.placeholder);
            this.element.css("width", this.options.width);

            this._span = $('<span class=\'input-group-btn\'>');
            this._modalBtn = $('<button type=\'button\' class=\'btn btn-blue btn-modal-pop\'   data-placement=\'top\' >');
            this._modalBtn.attr('onClick', this.options.btnMethod);
            if ((this.options.btnModalStatus == false) || (this.options.btnModalStatus == "disable")) {
                this._modalBtn.attr('disabled', '');
            }
            this._mainBtnIcon = $('<i></i>');
            this._mainBtnIcon.addClass(this.options.mainBtnIcon);

            $(this._modalBtn).append(this._mainBtnIcon);

            this._clearBtn = $('<button type=\'button\' class=\'btn btn-blue input-clear\' data-placement=\'top\'>' +
                '<i class=\'fas fa-times\'></i>' +
                '</button>');
            if ((this.options.btnClearStatus == false) || (this.options.btnClearStatus == "disable")) {
                this._clearBtn.attr('disabled', '');
            }
            if (this.options.clearMethod != "") {
                this._clearBtn.attr('onClick', this.options.clearMethod);
            }

            this.element.after(this._span);
            $(this._span).append(this._modalBtn);

            if (this.options.clearBtn == true) {
                $(this._span).append(this._clearBtn);
            }


        },
        _setOption: function(key, value) {
            switch (key) {
                case "btnModalStatus":
                    if ((value == false) || (value == "disable")) {
                        this._modalBtn.attr('disabled', '');
                    } else {
                        this._modalBtn.removeAttr('disabled');
                    }
                    break;
                case "btnClearStatus":
                    if ((value == false) || (value == "disable")) {
                        this._clearBtn.attr('disabled', '');
                    } else {
                        this._clearBtn.removeAttr('disabled');
                    }
                    break;
            }
        },


    });


});
$(document).on('click', '.input-clear', function() {
    $(this).closest('div').children('input').val('');
});