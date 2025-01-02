import Blog from "../model/blogModel.js";

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
