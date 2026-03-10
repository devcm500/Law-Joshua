import { client } from "@/lib/contentfull";

// Function to fetch blog posts based on parameters
export async function fetchBlogs(params) {
  const entries = await client.getEntries({
    ...params,
  });

  const items = entries.items.map((item) => {
    // Validation helper
    const validateImage = (imageField) => {
      if (
        !imageField?.fields?.file?.url ||
        !imageField.fields.file.details?.image
      ) {
        return {};
      }
      return {
        url: imageField.fields.file.url,
        height: imageField.fields.file.details.image.height ?? 0,
        width: imageField.fields.file.details.image.width ?? 0,
      };
    };

    return {
      title: item.fields?.title ?? "Untitled", // Default title if missing
      slug: item.fields?.slug ?? "",
      thumbnail: validateImage(item.fields?.thumbnail),
      category: {
        title: item.fields?.category?.fields.title,
        ...validateImage(item.fields?.category?.fields.thumbnail),
      },
      description: item.fields?.description ?? "", // Default rich text
      featured: item.fields?.featured ?? false,
      tags: item.fields?.tags ?? [],
      shortDescription: item.fields?.shortDescription ?? "",
      author: {
        name: item.fields?.author?.fields.name,
        ...validateImage(item.fields?.author?.fields.avatar),
      },
      createdAt: item.sys.createdAt,
      viewCount: item.fields?.viewCount ?? 0,
    };
  });

  return { items, total: entries.total };
}
