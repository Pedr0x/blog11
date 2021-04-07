exports.data = {
	pagination: {
		data: "collections.post",
		size: 1
	}
};

exports.render = function (data) {
	//	console.log(data.content);
	return JSON.stringify(data.content);
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
