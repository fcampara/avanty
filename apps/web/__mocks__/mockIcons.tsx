export default jest.mock("icons", () => {
  const originalModule = jest.requireActual("icons")

  return {
    ...originalModule,
    Rooms: () => <svg data-testid={"svg-room"} />,
    Bath: () => <svg data-testid={"svg-bath"} />,
    User: () => <svg data-testid={"svg-user"} />,
    Pool: () => <svg data-testid={"svg-pool"} />,
  }
})
