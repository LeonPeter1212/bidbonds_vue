import $ from "jquery";
$(document).ready(function (e) {
	$(window).on("load", function () {
		$(".loader-overlay").delay(500).fadeOut("slow"),
			$("#overlayer").fadeOut(500, function () {
				$("body").removeClass("overlayScroll");
			});
	});

	const a = document.querySelector(".sidebar-toggle");
	a &&
		a.addEventListener("click", function (t) {
			t.preventDefault(),
				$(".overlay-dark-sidebar").toggleClass("show"),
				document
					.querySelector(".sidebar")
					.classList.toggle("collapsed"),
				document
					.querySelector(".contents")
					.classList.toggle("expanded");
		}),
		$(".sidebar_nav .has-child ul").hide(),
		$(".sidebar_nav .has-child.open ul").show(),
		$(".sidebar_nav .has-child >a").on("click", function (t) {
			t.preventDefault(),
				$(this).parent().next("has-child").slideUp(),
				$(this)
					.parent()
					.parent()
					.children(".has-child")
					.children("ul")
					.slideUp(),
				$(this)
					.parent()
					.parent()
					.children(".has-child")
					.removeClass("open"),
				console.log($(this).next()),
				$(this).next().is(":visible")
					? $(this).parent().removeClass("open")
					: ($(this).parent().addClass("open"),
					  $(this).next().slideDown());
		}),
		$(window)
			.bind("resize", function () {
				window.innerWidth;
				$(this).width() <= 767.98 &&
					($(".navbar-right__menu").appendTo(
						".mobile-author-actions"
					),
					$(".search-form").appendTo(".mobile-search"),
					$(".contents").addClass("expanded"),
					$(".sidebar ").addClass("collapsed"));
			})
			.trigger("resize"),
		$(window)
			.bind("resize", function () {
				window.innerWidth;
				$(this).width() > 767.98 &&
					$(".atbd-mail-sidebar").addClass("show");
			})
			.trigger("resize"),
		$(window)
			.bind("resize", function () {
				window.innerWidth;
				$(this).width() <= 991 &&
					($(".sidebar").addClass("collapsed"),
					$(".sidebar-toggle").on("click", function () {
						$(".overlay-dark-sidebar").toggleClass("show");
					}),
					$(".overlay-dark-sidebar").on("click", function () {
						console.log($(this)),
							$(this).removeClass("show"),
							$(".sidebar").addClass("collapsed");
					}));
			})
			.trigger("resize"),
		$(window)
			.bind("resize", function () {
				window.innerWidth;
				$(this).width() <= 991.98 &&
					$(".menu-horizontal").appendTo(".mobile-nav-wrapper");
			})
			.trigger("resize"),
		$(".btn-search").on("click", function () {
			$(this).toggleClass("search-active"),
				$(".mobile-search").toggleClass("show"),
				$(".mobile-author-actions").removeClass("show");
		});
});
