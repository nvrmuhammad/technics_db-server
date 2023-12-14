export const listAdmin = async (req, res) => {
  try {
    const result = await listAdminService()
  } catch (error) {
    console.log(error)
  }
}
