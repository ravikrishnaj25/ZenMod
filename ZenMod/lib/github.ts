import { Octokit } from "@octokit/rest";

export interface RepoFile {
  path: string;
  content: string;
}

export async function getRepoContents(
  octokit: Octokit,
  owner: string,
  repo: string,
  path: string = ""
): Promise<RepoFile[]> {
  const { data: contents } = await octokit.repos.getContent({
    owner,
    repo,
    path,
  });

  if (!Array.isArray(contents)) {
    return [];
  }

  const files: RepoFile[] = [];
  for (const item of contents) {
    if (item.type === "file") {
      const { data: file } = await octokit.git.getBlob({
        owner,
        repo,
        file_sha: item.sha,
      });
      files.push({
        path: item.path,
        content: Buffer.from(file.content, "base64").toString("utf-8"),
      });
    } else if (item.type === "dir") {
      const subFiles = await getRepoContents(octokit, owner, repo, item.path);
      files.push(...subFiles);
    }
  }

  return files;
}
