/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Language as PrismaLanguage } from "@prisma/client";

export class LanguageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LanguageCountArgs, "select">): Promise<number> {
    return this.prisma.language.count(args);
  }

  async languages<T extends Prisma.LanguageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LanguageFindManyArgs>
  ): Promise<PrismaLanguage[]> {
    return this.prisma.language.findMany<Prisma.LanguageFindManyArgs>(args);
  }
  async language<T extends Prisma.LanguageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LanguageFindUniqueArgs>
  ): Promise<PrismaLanguage | null> {
    return this.prisma.language.findUnique(args);
  }
  async createLanguage<T extends Prisma.LanguageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LanguageCreateArgs>
  ): Promise<PrismaLanguage> {
    return this.prisma.language.create<T>(args);
  }
  async updateLanguage<T extends Prisma.LanguageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LanguageUpdateArgs>
  ): Promise<PrismaLanguage> {
    return this.prisma.language.update<T>(args);
  }
  async deleteLanguage<T extends Prisma.LanguageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LanguageDeleteArgs>
  ): Promise<PrismaLanguage> {
    return this.prisma.language.delete(args);
  }
}