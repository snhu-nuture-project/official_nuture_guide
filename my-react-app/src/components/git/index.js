import React, { Component } from "react";
import "./style.css";

class Git extends Component {
  render() {
    return (
      <section className="github" id="github">

        <div className="row">
          <div className="col-md-12">
            <h1>Github Cheat Sheet</h1>
            <hr className="hrt" />
          </div>
        </div>

        <div className="row">
          <table className="table-style">
            <thead>
              <tr>
                <th>Command</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>git init</td>
                <td>Initializes a new Git repository.</td>
                <td>git init</td>
              </tr>
              <tr>
                <td>git clone [repository_url]</td>
                <td>Creates a local copy of a remote repository.</td>
                <td>git clone https://github.com/username/repository.git</td>
              </tr>
              <tr>
                <td>git add [file(s)]</td>
                <td>Stages file(s) for the next commit.</td>
                <td>git add myfile.txt</td>
              </tr>
              <tr>
                <td>git commit -m "[commit_message]"</td>
                <td>Commits the staged changes with a message.</td>
                <td>git commit -m "Add feature XYZ"</td>
              </tr>
              <tr>
                <td>git status</td>
                <td>Displays the current status of the working directory.</td>
                <td>git status</td>
              </tr>
              <tr>
                <td>git log</td>
                <td>Displays a list of all commits in the repository.</td>
                <td>git log</td>
              </tr>
              <tr>
                <td>git branch [branch_name]</td>
                <td>Creates a new branch with the given name.</td>
                <td>git branch feature-branch</td>
              </tr>
              <tr>
                <td>git checkout [branch_name]</td>
                <td>Switches to the specified branch.</td>
                <td>git checkout feature-branch</td>
              </tr>
              <tr>
                <td>git merge [branch_name]</td>
                <td>Combines changes from the specified branch.</td>
                <td>git merge feature-branch</td>
              </tr>
              <tr>
                <td>git pull</td>
                <td>Fetches and merges changes from the remote repository.</td>
                <td>git pull origin main</td>
              </tr>
              <tr>
                <td>git push [remote] [branch]</td>
                <td>Pushes local commits to the remote repository.</td>
                <td>git push origin feature-branch</td>
              </tr>
              <tr>
                <td>git remote -v</td>
                <td>Lists all remote repositories and their URLs.</td>
                <td>git remote -v</td>
              </tr>
              <tr>
                <td>git remote add [name] [repository_url]</td>
                <td>Adds a new remote repository with a custom name.</td>
                <td>
                  git remote add origin
                  https://github.com/username/repository.git
                </td>
              </tr>
              <tr>
                <td>git fork</td>
                <td>
                  Creates a copy (fork) of a repository on your GitHub account.
                </td>
                <td>git fork https://github.com/original/repo.git</td>
              </tr>
              <tr>
                <td>git pull-request</td>
                <td>Opens a pull request on GitHub.</td>
                <td>git pull-request</td>
              </tr>
              <tr>
                <td>git fetch [remote]</td>
                <td>Fetches changes from a remote repository.</td>
                <td>git fetch origin</td>
              </tr>
              <tr>
                <td>git push origin --delete [branch_name]</td>
                <td>Deletes a branch on the remote repository </td>
                <td>Deletes a branch on the remote repository </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col-md-12 mt-4">
            <h1>GitBash Basic Commands</h1>
            <hr className="hrt" />
          </div>
        </div>

        <div className="row">
          <table className="table-style">
            <thead>
              <tr>
                <th>Command</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>cd [directory]</td>
                <td>
                  Change the current working directory to the specified
                  directory.
                </td>
              </tr>
              <tr>
                <td>pwd</td>
                <td>Print the current working directory (current path).</td>
              </tr>
              <tr>
                <td>ls</td>
                <td>
                  List the files and directories in the current directory.
                </td>
              </tr>
              <tr>
                <td>ls -a</td>
                <td>
                  List all files and directories in the current directory,
                  including hidden ones.
                </td>
              </tr>
              <tr>
                <td>ls -l</td>
                <td>
                  List files and directories in long format, showing additional
                  details.
                </td>
              </tr>
              <tr>
                <td>ls [directory]</td>
                <td>List files and directories in the specified directory.</td>
              </tr>
              <tr>
                <td>mkdir [directory]</td>
                <td>Create a new directory with the specified name.</td>
              </tr>
              <tr>
                <td>touch [file]</td>
                <td>Create a new empty file with the specified name.</td>
              </tr>
              <tr>
                <td>rm [file]</td>
                <td>Remove (delete) a file.</td>
              </tr>
              <tr>
                <td>rm -r [directory]</td>
                <td>
                  Remove (delete) a directory and its contents recursively.
                </td>
              </tr>
              <tr>
                <td>mv [source] [destination]</td>
                <td>Move or rename a file or directory.</td>
              </tr>
              <tr>
                <td>cp [source] [destination]</td>
                <td>Copy a file or directory to a specified destination.</td>
              </tr>
              <tr>
                <td>clear</td>
                <td>Clear the terminal screen.</td>
              </tr>
            </tbody>
          </table>
        </div>

      </section>
    );
  }
}

export default Git;
