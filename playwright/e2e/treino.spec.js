import { test, expect } from '@playwright/test'

test('deve mostrar BikeBoard no título', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/BikeBoard/)
})

test('deve mostrar a frase da home', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Sua próxima bike está aqui!')).toBeVisible()
})

test('deve mostrar o link de anunciar', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: 'Anunciar Bike' })).toBeVisible()
})

test('deve ir para a página de anúncio', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Anunciar Grátis' }).click()
  await expect(page).toHaveURL(/cadastrar/)
})
