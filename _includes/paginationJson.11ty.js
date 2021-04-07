exports.data = {
	pagination: {
		data: "collections.post",
		size: 2
	}
};

exports.render = function (data) {
	const { next, previous, last, first } = data.pagination.href;
	return JSON.stringify({
		data: data.content,
		links: {
			next,
			previous,
			last,
			first
		}
	});
};
