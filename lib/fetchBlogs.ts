import { client } from "@/lib/contentfull";
import type { Blog } from "@/types";

interface ContentfulImageField {
  fields?: {
    file?: {
      url?: string;
      details?: {
        image?: {
          height?: number;
          width?: number;
        };
      };
    };
  };
}

interface FetchBlogsResponse {
  items: Blog[];
  total: number;
}

export async function fetchBlogs(params: Record<string, unknown>): Promise<FetchBlogsResponse> {
  const entries = await client.getEntries({
    ...params,
  });

  const validateImage = (imageField: ContentfulImageField) => {
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

  const items = entries.items.map((item) => {
    const fields = item.fields as Record<string, any>;
    return {
      title: fields?.title ?? "Untitled",
      slug: fields?.slug ?? "",
      thumbnail: validateImage(fields?.thumbnail),
      category: {
        title: (fields?.category as any)?.fields?.title,
        ...validateImage((fields?.category as any)?.fields?.thumbnail),
      },
      description: fields?.description ?? "",
      featured: fields?.featured ?? false,
      tags: fields?.tags ?? [],
      shortDescription: fields?.shortDescription ?? "",
      author: {
        name: (fields?.author as any)?.fields?.name,
        ...validateImage((fields?.author as any)?.fields?.avatar),
      },
      createdAt: item.sys.createdAt,
      viewCount: fields?.viewCount ?? 0,
    };
  }) as Blog[];

  return { items, total: entries.total };
}
