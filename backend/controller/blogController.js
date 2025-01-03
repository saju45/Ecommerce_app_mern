import Blog from "../model/blogModel.js";
import User from "../model/userModel.js";

export const addBlog = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Title and Description are required" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const blog = new Blog({ title, description, image: req.file.path });
    await blog.save();

    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ error: "There was an error in server side" });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There wan an error in server side" });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(400).json({ error: "blog not found" });
    }

    res.status(200).json({ message: "succefully fetch single blog", blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was a problem in server side" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { title, description } = req.body;

    console.log(title, description);

    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Title and Description are required" });
    }

    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ error: "please provide blogId" });
    }

    let blog;
    if (req.file) {
      blog = await Blog.findByIdAndUpdate(id, {
        title,
        description,
        image: req.file.path,
      });
    } else {
      blog = await Blog.findByIdAndUpdate(id, {
        title,
        description,
      });
    }

    res.status(201).json({ message: "Blog update successfully", blog });
  } catch (error) {
    res.status(500).json({ error: "there was an error in server side" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: `${blog.title} blog deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: "There was an error in server side" });
  }
};

export const addToFavourite = async (req, res) => {
  try {
    const { blogid } = req.params;

    if (!blogid) {
      return res.status(400).json({ error: "blogid is required" });
    }

    const user = await User.findById(req.user._id);
    const blog = await Blog.findById(blogid);

    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }
    if (!blog) {
      return res.status(400).json({ error: "blog not found" });
    }

    if (
      user.favouriteBlogs.includes(blogid) ||
      blog.favouriteBlogByUser.includes(user._id)
    ) {
      return res.status(401).json({ error: "Blog already added to favourite" });
    }

    user.favouriteBlogs.push(blogid);
    blog.favouriteBlogByUser.push(user._id);
    await user.save();
    await blog.save();

    res
      .status(200)
      .json({ message: "Blog added to favourite successfully", blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was an error in server side" });
  }
};

export const removedFromFavourite = async (req, res) => {
  try {
    const { blogid } = req.params;

    if (!blogid) {
      return res.status(400).json({ error: "blogid is required" });
    }

    const blog = await Blog.findById(blogid);
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(400).json({ error: "User Not found" });
    }
    if (!blog) {
      return res.status(400).json({ error: "blog not found" });
    }

    if (
      !blog.favouriteBlogByUser.includes(user._id) ||
      !user.favouriteBlogs.includes(blogid)
    ) {
      return res
        .status(400)
        .json({ error: "blog not found in favourite list" });
    }

    user.favouriteBlogs = user.favouriteBlogs.filter(
      (id) => id.toString() !== blogid
    );
    blog.favouriteBlogByUser = blog.favouriteBlogByUser.filter(
      (id) => id.toString() !== user._id.toString()
    );

    await user.save();
    await blog.save();

    res
      .status(200)
      .json({ message: "blog removed from favourite successfully", blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAllFavourtie = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("favouriteBlogs");

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    res.status(200).json(user.favouriteBlogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was an error in server side" });
  }
};
