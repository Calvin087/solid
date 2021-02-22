const cleanerBot = (post) => {
    const regex = /\[(.*?)\]/g;
    return post.replace(regex, "");
};

export default cleanerBot;
