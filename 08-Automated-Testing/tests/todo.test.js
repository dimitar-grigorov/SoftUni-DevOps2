const { test, expect } = require("@playwright/test");

const serverUrl = "http://localhost:5500";

// Verify that user can add a task
test("user can add a task", async ({ page }) => {
    await page.goto(serverUrl);
    await page.fill("#task-input", "Test Task");
    await page.click("#add-task");
    const taskText = await page.textContent(".task");
    expect(taskText).toContain("Test Task");
});

// Verify that user can delete a task
test("user can delete a task", async ({ page }) => {
    await page.goto(serverUrl);
    await page.fill("#task-input", "Test Task");
    await page.click("#add-task");

    // Delete the task
    await page.click(".task .delete-task");

    const tasks = await page.$$eval(".task", (tasks) =>
        tasks.map((task) => task.textContent)
    );
    expect(tasks).not.toContain("Test Task");
});
