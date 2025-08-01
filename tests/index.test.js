/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("Portfolio Page", () => {
  let html;

  beforeAll(() => {
    const filePath = path.resolve(__dirname, "../index.html");
    html = fs.readFileSync(filePath, "utf8");
    document.documentElement.innerHTML = html;
  });

  test("should have a title", () => {
    const title = document.querySelector("title");
    expect(title).not.toBeNull();
    expect(title.textContent).toBe("My Portfolio");
  });

  test("should have a header section", () => {
    const header = document.querySelector("header");
    expect(header).not.toBeNull();
    expect(header.querySelector("h1").textContent).toContain("Abhishek");
  });

  test("should have a Projects section with at least one project", () => {
    const projectSection = document.querySelector("#projects");
    expect(projectSection).not.toBeNull();

    const projectList = projectSection.querySelectorAll("li");
    expect(projectList.length).toBeGreaterThanOrEqual(1);
  });

  test("should have a Skills section", () => {
    const skills = document.querySelector("#skills");
    expect(skills).not.toBeNull();
    expect(skills.textContent).toMatch(/JavaScript|React/i);
  });

  test("should have a Contact section with an email", () => {
    const contact = document.querySelector("#contact");
    expect(contact).not.toBeNull();

    const email = contact.querySelector("a[href^='mailto:']");
    expect(email).not.toBeNull();
    expect(email.getAttribute("href")).toContain("@");
  });

  test("should have a footer", () => {
    const footer = document.querySelector("footer");
    expect(footer).not.toBeNull();
    expect(footer.textContent).toContain("© 2025");
  });
});
