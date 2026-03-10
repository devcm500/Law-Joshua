"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

export default function SearchBlog() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();

  const handleChangesearch = (): void => {
    if (searchQuery != "") {
      const createPageLink = () => {
        const newParams = new URLSearchParams(params.toString());
        newParams.set("page", "1");
        newParams.set("search", searchQuery);

        return `/archive?${newParams.toString()}`;
      };
      router.push(createPageLink());
    }
  };

  return (
    <form
      className="blog__search"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleChangesearch();
      }}
    >
      <input
        className="form-control"
        type="text"
        placeholder="Search.. crime, politics, business"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
      />
      <i
        className="fa-regular fa-magnifying-glass"
        onClick={handleChangesearch}
      ></i>
    </form>
  );
}
