function Book(title, author, year, status) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
}

$("#add-book").on("click", function addBook() {
    const book = new Book($("#title").val(),$("#author").val(),$("#year").val(),$("#status").val());

    if (book.title === "") {
        $("#error-message").css("display", "block");
        $("#error-message").text("Book title is empty");
    }
    else if (book.author === "") {
        $("#error-message").css("display", "block");
        $("#error-message").text("Book author is empty");
    }
    else if (book.year === "") {
        $("#error-message").css("display", "block");
        $("#error-message").text("Book year is empty");
    }
    else if (isNaN(book.year) || (book.year > (new Date().getFullYear()))) {
        $("#error-message").css("display", "block");
        $("#error-message").text("Book year is not valid");
    }
    else {
        if ($("thead > tr").length <= 5) {
            $("thead > tr > th").append("<th></th>")
        }

        $("tbody")
            .append($("<tr>")
                .append($("<td>").text(book.title)
                )
                .append($("<td>").text(book.author)
                )
                .append($("<td>").text(book.year)
                )
                .append($("<td>")
                    .append($("<label>")
                        .append($("<input />")
                            .attr("type", "button")
                            .attr("value", book.status)
                            .addClass("status")
                        )
                    )
                )
                .append($("<td>")
                    .append($("<label>")
                        .append($("<input />")
                            .attr("type", "button")
                            .attr("value", "Delete")
                            .addClass("delete")
                        )
                    )
                )
            );
        $("#error-message").css("display", "none");
        $("#title").val("");
        $("#author").val("");
        $("#year").val("");
        $("#status").val("Read");
    }
});


$("tbody").on("click","tr > td > label > .delete", function removeBook() {
    $(event.target).parent().parent().parent().remove();
});

$("tbody").on("click","tr > td> label > .status", function changeStatus() {
    if ($(event.target).attr("value") === "Not Read") {
        $(event.target).attr("value", "Read");
    } else {
        $(event.target).attr("value", "Not Read");
    }
});

const footerText = "Dragan Stojanovski &copy; " + (new Date().getFullYear());
$("footer > p").html(footerText);