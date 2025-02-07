import { TypeRole } from "../auth.interface"
import { applyDecorators, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "../guards/jwt.guard"
import { OnlyAdminGuard } from "../guards/admin.guard"

export const Auth = (role: TypeRole = "user") => {
  return applyDecorators(
    UseGuards(JwtAuthGuard)
  )
}
